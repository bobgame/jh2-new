import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UiAvatarComponent } from '../../../common/ui/ui-avatar/ui-avatar.component'
import { UiTipArrowDownComponent } from '../../../common/ui/ui-tip-arrow-down/ui-tip-arrow-down.component'
import { clone, rand, randInt, replaceTalk, sampleItem } from '../../../units/Base'
import { GlobalService } from '../../../services/global.service'
import { BasicTalkItem, basicFullTalks, basicHighTalks, basicLowTalks, basicMidTalks } from '../../../data/talk-basic'
import { UiCityBgComponent } from '../../ui/ui-city-bg/ui-city-bg.component'
import { TalkType } from '../../../constants/interfaces/base.interface'
import { qtBasicTalks, qtHighTalks, qtLowTalks, qtMidTalks } from '../../../data/talk-qt'
import { environment } from '../../../../environments/environment'
import { CityGroupEnum } from '../../../constants/enums/base.enum'

@Component({
  selector: 'jh-pop-talk',
  imports: [CommonModule, UiAvatarComponent, UiTipArrowDownComponent, UiCityBgComponent],
  templateUrl: './pop-talk.component.html',
  styleUrl: './pop-talk.component.scss',
})
export class PopTalkComponent implements OnInit {
  constructor(private g: GlobalService) {}
  @Input() talkType: TalkType = 'bc'
  @Input() npc = this.g.getRw(1)
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

  talks = clone(basicLowTalks)[0]
  currentTalk = this.talks[0]
  qtData = {
    jq: 0,
    showToast: false,
  }

  ngOnInit(): void {
    if (this.talkType === 'qt') {
      const newRws = this.g.rws.filter(r => r.id !== this.g.getHeroInRwId())
      const randNpc = sampleItem(newRws)
      this.npc = randNpc
      const npcHeart = this.npc.heart
      if (npcHeart > 50) {
        this.talks = sampleItem(clone(qtHighTalks))
      } else if (npcHeart > 20) {
        this.talks = sampleItem(clone(qtMidTalks))
      } else {
        if (rand() > 0.8) {
          this.talks = sampleItem(clone(qtLowTalks))
        } else {
          this.talks = sampleItem(clone(qtBasicTalks))
        }
      }
    } else {
      const npcHeart = this.npc.heart
      if (npcHeart >= 100) {
        this.talks = sampleItem(clone(basicFullTalks))
      } else if (npcHeart > 50) {
        this.talks = sampleItem(clone(basicHighTalks))
      } else if (npcHeart > 20) {
        this.talks = sampleItem(clone(basicMidTalks))
      } else {
        this.talks = sampleItem(clone(basicLowTalks))
      }
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
    if (this.talkType === 'qt') {
      this.qtNext()
    } else {
      this.baseNext()
    }
  }

  qtNext() {
    if (this.currentTalk.actionType === 'give-jq' && this.currentTalk.actionValue && !this.qtData.showToast) {
      this.g.addJq(this.currentTalk.actionValue * 1000)
      this.qtData.jq = this.currentTalk.actionValue
      this.qtData.showToast = true
    } else {
      if (this.qtData.showToast) {
        this.qtData.showToast = false
      }
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

  close() {
    if (this.talkType === 'qt') {
      this.g.getRw(this.npc.id).heart += 2
    } else {
      this.g.getRw(this.npc.id).heart += randInt(6, 3)
    }
    this.closePop.emit()
  }
}
