import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiAvatarComponent } from '../../ui/ui-avatar/ui-avatar.component'
import { UiTipArrowDownComponent } from '../../ui/ui-tip-arrow-down/ui-tip-arrow-down.component'
import { clone, replaceTalk, sampleItem } from '../../../units/Base'
import { GlobalService } from '../../../services/global.service'
import { BasicTalkItem, basicFtTalks } from '../../../data/talk-basic'
import { UiCityBgComponent } from '../../ui/ui-city-bg/ui-city-bg.component'
import { FightTalkData } from '../../../constants/interfaces/base.interface'

@Component({
  selector: 'jh-pop-talk-ft',
  imports: [CommonModule, UiAvatarComponent, UiTipArrowDownComponent, UiCityBgComponent],
  templateUrl: './pop-talk-ft.component.html',
  styleUrl: './pop-talk-ft.component.scss',
})
export class PopTalkFtComponent implements OnInit {
  constructor(private g: GlobalService) {}
  @Input() talkData: FightTalkData = {
    show: false,
    isEnd: false,
    isWin: false,
  }
  npc = this.g.getRw(1)
  @Output() closePop = new EventEmitter<void>()

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

  talks = clone(basicFtTalks)[0]
  currentTalk = this.talks[0]

  ngOnInit(): void {
    this.npc = this.g.fight.rw
    if (this.talkData.isEnd) {
      if (this.talkData.isWin) {
        this.talks = clone(basicFtTalks)[2]
      } else {
        this.talks = clone(basicFtTalks)[1]
      }
    } else {
      this.talks = clone(basicFtTalks)[0]
    }
    this.setFirstCurrentTalk()
    // this.showHero = true
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

  close() {
    this.closePop.emit()
  }
}
