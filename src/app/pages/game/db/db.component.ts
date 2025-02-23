import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiAvatarComponent } from '../../../common/ui/ui-avatar/ui-avatar.component'
import { UiTipArrowDownComponent } from '../../../common/ui/ui-tip-arrow-down/ui-tip-arrow-down.component'
import { clone, rand, randInt, replaceTalk, sampleItem } from '../../../units/Base'
import { PopChooseComponent } from '../../../common/pop/pop-choose/pop-choose.component'
import { GlobalService } from '../../../services/global.service'
import { BasicTalkItem, basicLowTalks } from '../../../data/talk-basic'
import { TalkType, DbStatus, AnswerItem } from '../../../constants/interfaces/base.interface'
import { UiCityBgComponent } from '../../../common/ui/ui-city-bg/ui-city-bg.component'
import { UiTzComponent } from '../../../common/ui/ui-tz/ui-tz.component'
import { IntPipe } from '../../../pipes/int.pipe'
import { calcBattleResult, calcCardResult, calcCardType } from '../../fight/fight-tool'
import { calcTZResult } from './db-tool'
import { dbBaseQa, dbTzQa1, dbGuide, dbTzQa2, dbDxQa1 } from './db-data'
import { CityGroupEnum, FightCardEnum, HeroIdEnum, PageEnum } from '../../../constants/enums/base.enum'
import { TaskService } from '../../../services/task.service'
import { KeyIds } from '../../../data/tasks/keys.interface'
import { RwIdEnum } from '../../../constants/enums/rw.enum'

@Component({
  selector: 'jh-db',
  imports: [CommonModule, UiAvatarComponent, UiTipArrowDownComponent, PopChooseComponent, UiCityBgComponent, UiTzComponent, IntPipe],
  templateUrl: './db.component.html',
  styleUrl: './db.component.scss',
})
export class DbComponent implements OnInit {
  constructor(
    public g: GlobalService,
    private t: TaskService,
  ) {}
  @Input() talkType: TalkType = 'bc'
  @Input() npc = this.g.getRw(1)
  @Output() closePop = new EventEmitter<void>()

  showTalk = false
  showChoose = false

  dbQa = clone(dbBaseQa)

  gotJq = 0

  dbData = {
    base: 1,
    dx: 1,
    isInit: false,
    npc: [
      { id: 0, num: 1 },
      { id: 0, num: 1 },
      { id: 0, num: 1 },
    ],
    hero: [
      { id: 0, num: 1 },
      { id: 0, num: 1 },
      { id: 0, num: 1 },
    ],
  }

  npcTalk: BasicTalkItem = {
    id: 1,
    rwId: 1,
    type: 'rw',
    text: '你是新，新，新来的吧？',
    isActive: false,
  }

  heroTalk: BasicTalkItem = {
    id: 1,
    rwId: 1,
    type: 'zj',
    text: '什么人？',
    isActive: false,
  }

  showNpc = false
  showHero = false

  talks = clone(basicLowTalks)[0]
  currentTalk = this.talks[0]

  toastData: ToastData = {
    jq: 20,
    status: 'draw',
    showToast: false,
    text: '',
  }

  dbTimer = {
    npc: 0,
    hero: 0,
  }

  ngOnInit(): void {
    this.npc = this.g.getRw(this.g.dbGlobalData.rwId)
    this.npcTalk.rwId = this.npc.id

    if (!this.g.current.guides.db[this.g.dbGlobalData.type] && this.g.hero.id === HeroIdEnum.WuMing) {
      this.g.current.guides.db[this.g.dbGlobalData.type] = true
      this.toastData.text = dbGuide[this.g.dbGlobalData.type]
      this.toastData.status = 'special'
      this.toastData.showToast = true
    } else {
      if (this.g.dbGlobalData.type === 'yp') {
        this.startYP()
      }
    }

    if (this.g.dbGlobalData.type === 'tz' || this.g.dbGlobalData.type === 'dx') {
      this.dbQa = clone(dbBaseQa)
      this.showChoose = true
    }

    // setTimeout(() => {
    //   this.startTouZi()
    // }, 3000)

    this.talks = sampleItem(clone(basicLowTalks))
    this.setFirstCurrentTalk()
    this.g.getKey(KeyIds.Count_DuBo_Game).value++
    switch (this.g.dbGlobalData.type) {
      case 'dx':
        this.g.getKey(KeyIds.Count_DuBo_DaXiao).value++
        break
      case 'tz':
        this.g.getKey(KeyIds.Count_DuBo_TouZi).value++
        break
      case 'yp':
        this.g.getKey(KeyIds.Count_DuBo_YiPei).value++
        break
      default:
        break
    }
    // this.showHero = true
  }

  startCheckJq() {
    if (this.g.hero.jq < 1000) {
      this.toastData.text = `没钱就别来！`
      this.toastData.status = 'exit'
      this.toastData.showToast = true
      return false
    }
    return true
  }

  startDX() {
    if (!this.startCheckJq()) {
      return
    }
    this.dbData.npc = [
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
    ]
    setTimeout(() => {
      const totalNum = this.dbData.npc.reduce((total, item) => total + item.num, 0)
      let status: DbStatus = 'win'
      if (this.dbData.dx === 1) {
        status = totalNum >= 11 ? 'win' : 'lose'
      } else {
        status = totalNum >= 11 ? 'lose' : 'win'
      }
      this.toastData.jq = this.dbData.base
      if (status === 'win') {
        this.g.addJq(this.toastData.jq * 1000)
        this.gotJq += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_Count).value++
      } else {
        this.g.useJq(this.toastData.jq * 1000)
        this.gotJq -= this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
      }
      this.toastData.status = status
      this.toastData.showToast = true
    }, 500)
  }

  startTZ() {
    if (!this.startCheckJq()) {
      return
    }
    this.dbData.npc = [
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
    ]
    this.dbData.hero = [
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
    ]
    setTimeout(() => {
      const npcNumArr = this.dbData.npc.map(item => item.num)
      const heroNumArr = this.dbData.hero.map(item => item.num)
      const cardResult = calcTZResult(npcNumArr, heroNumArr)
      this.toastData.status = cardResult.status
      this.toastData.jq = cardResult.rate * this.dbData.base
      if (cardResult.status === 'win') {
        this.g.addJq(this.toastData.jq * 1000)
        this.gotJq += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_Count).value++
      } else if (cardResult.status === 'lose') {
        this.g.useJq(this.toastData.jq * 1000)
        this.gotJq -= this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
      }
      this.toastData.showToast = true
    }, 500)
  }

  startYP() {
    if (!this.startCheckJq()) {
      return
    }
    this.toastData.jq = 0
    this.ypHero()
  }

  ypHero() {
    this.toastData.jq++
    this.dbData.hero = [
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
    ]
    this.dbTimer.hero = window.setTimeout(() => {
      const cardType = calcCardType(this.dbData.hero.map(item => item.num))
      if (cardType === FightCardEnum.ThreeOfAKing) {
        this.toastData.status = 'exit'
        this.toastData.text = `赢了${this.toastData.jq}两。`
        this.g.addJq(this.toastData.jq * 1000)
        this.gotJq += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Win_Count).value++
        this.toastData.showToast = true
      } else {
        if (this.g.hero.jq <= this.toastData.jq * 1000) {
          this.toastData.status = 'exit'
          this.toastData.text = `你没有钱了，输光了`
          this.g.hero.jq = 0
          this.gotJq = -1
          this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
          this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
          this.toastData.showToast = true
        } else {
          this.ypNpc()
        }
      }
    }, 500)
  }

  ypNpc() {
    this.toastData.jq++
    this.dbData.npc = [
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
      { id: rand(), num: randInt(6, 1) },
    ]
    this.dbTimer.npc = window.setTimeout(() => {
      const cardType = calcCardType(this.dbData.npc.map(item => item.num))
      if (cardType === FightCardEnum.ThreeOfAKing) {
        this.toastData.status = 'exit'
        this.toastData.text = `输了${this.toastData.jq}两。`
        this.g.useJq(this.toastData.jq * 1000)
        this.gotJq -= this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
        this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
        this.toastData.showToast = true
      } else {
        if (this.g.hero.jq <= this.toastData.jq * 1000) {
          this.toastData.status = 'exit'
          this.toastData.text = `你没有钱了，输光了`
          this.g.hero.jq = 0
          this.gotJq = -1
          this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
          this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
          this.toastData.showToast = true
        } else {
          this.ypHero()
        }
      }
    }, 500)
  }

  cancelYP($event: MouseEvent) {
    clearTimeout(this.dbTimer.npc)
    clearTimeout(this.dbTimer.hero)
    this.toastData.status = 'exit'
    this.toastData.text = `你放弃了。输了${this.toastData.jq}两。`
    this.g.useJq(this.toastData.jq * 1000)
    this.gotJq -= this.toastData.jq
    this.g.getKey(KeyIds.Count_DuBo_Lose_JQ).value += this.toastData.jq
    this.g.getKey(KeyIds.Count_DuBo_Lose_Count).value++
    this.toastData.showToast = true
    $event.stopPropagation()
    $event.preventDefault()
  }

  setFirstCurrentTalk() {
    // if (preTalk) {
    //   preTalk.isActive = false
    // } else {
    this.currentTalk = this.talks[0]

    this.setActiveTalk(this.currentTalk)
    // }
  }

  setActiveTalk(talk: BasicTalkItem) {
    this.npcTalk.isActive = talk.type === 'rw'
    this.heroTalk.isActive = !this.npcTalk.isActive
    if (talk.type === 'rw') {
      this.npcTalk.rwId = this.npc.id
      this.npcTalk.text = replaceTalk(talk.text, {})
    } else {
      this.heroTalk.rwId = this.g.hero.id
      this.heroTalk.text = replaceTalk(talk.text, { npcName: this.npc.name })
    }
    if (this.npcTalk.isActive && !this.showNpc) {
      this.showNpc = true
    }
    if (this.heroTalk.isActive && !this.showHero) {
      this.showHero = true
    }
  }

  guideNext() {
    if (!this.showTalk) {
      this.dbNext()
    } else {
      this.baseNext()
    }
  }

  dbNext() {
    if (!this.toastData.showToast) {
      return
    } else {
      if (this.toastData.status === 'special') {
        this.toastData.showToast = false
        if (this.g.dbGlobalData.type === 'yp') {
          this.startYP()
        }
      } else if (this.toastData.status === 'exit') {
        this.toastData.showToast = false
        this.close()
      } else {
        if (this.g.dbGlobalData.type === 'tz') {
          this.dbQa = clone(dbTzQa2)
        }
        this.toastData.showToast = false
        this.showChoose = true
      }
    }
  }

  baseNext() {
    const index = this.talks.findIndex(item => item.id === this.currentTalk.id)
    const nextTalk = this.talks[index + 1]
    // console.log('nextTalk', nextTalk)
    if (nextTalk) {
      this.currentTalk = nextTalk
      this.setActiveTalk(this.currentTalk)
    } else {
      this.close()
    }
  }

  exitAnswer(answer: AnswerItem) {
    if (this.g.dbGlobalData.type === 'tz') {
      if (!this.dbData.isInit) {
        this.dbData.isInit = true
        this.dbData.base = answer.actionValue
        this.dbQa = clone(dbTzQa1)
      } else {
        if (answer.actionType === 2) {
          this.startTZ()
        } else {
          // console.log('answer', answer)
          this.close()
        }
        this.showChoose = false
      }
    } else if (this.g.dbGlobalData.type === 'dx') {
      if (!this.dbData.isInit) {
        this.dbData.isInit = true
        this.dbData.base = answer.actionValue
        this.dbQa = clone(dbDxQa1)
      } else {
        if (answer.actionType === 2) {
          if (answer.actionValue === 1) {
            this.dbData.dx = 1
          } else {
            this.dbData.dx = 2
          }
          this.startDX()
        } else {
          // console.log('answer', answer)
          this.close()
        }
        this.showChoose = false
      }
    }
  }

  close() {
    this.g.getRw(this.npc.id).heart += randInt(6, 3)
    // this.closePop.emit()
    let talkId = 0
    if (this.gotJq > 0 && this.g.gmData.db.successTId > 0) {
      talkId = this.g.gmData.db.successTId
    } else if (this.gotJq <= 0 && this.g.gmData.db.failTId > 0) {
      talkId = this.g.gmData.db.failTId
    }

    if (talkId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.db.successTId = 0
        this.g.gmData.db.failTId = 0
        this.g.dbGlobalData.rwId = RwIdEnum.NoBody
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.db.successTId = 0
      this.g.gmData.db.failTId = 0
      this.g.dbGlobalData.rwId = RwIdEnum.NoBody
    }

    this.g.goBack()
  }
}

interface ToastData {
  jq: number
  status: DbStatus
  showToast: boolean
  text: string
}
