import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UiAvatarComponent } from '../../common/ui/ui-avatar/ui-avatar.component'
import { UiTipArrowDownComponent } from '../../common/ui/ui-tip-arrow-down/ui-tip-arrow-down.component'
import { GuideTalkItem, guideQa, guideTalkDefault } from './guide-data'
import { clone } from '../../units/Base'
import { PopChooseComponent } from '../../common/pop/pop-choose/pop-choose.component'
import { AnswerItem } from '../../constants/interfaces/base.interface'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { TaskAnswerItem } from '../../data/tasks/task.interface'
import { UiCityBgComponent } from '../../common/ui/ui-city-bg/ui-city-bg.component'

@Component({
  selector: 'jh-play-guide',
  standalone: true,
  imports: [CommonModule, UiAvatarComponent, UiCityBgComponent, UiTipArrowDownComponent, PopChooseComponent],
  templateUrl: './play-guide.component.html',
  styleUrl: './play-guide.component.scss',
})
export class PlayGuideComponent implements OnInit {
  constructor(private g: GlobalService) {}
  npcTalk: GuideTalkItem = {
    id: 1,
    rwId: 1,
    type: 'rw',
    text: '你是新，新，新来的吧？',
    isActive: true,
  }

  heroTalk: GuideTalkItem = {
    id: 1,
    rwId: 1,
    type: 'zj',
    text: '什么人？',
    isActive: false,
  }

  showNpc = false
  showHero = false

  guideTalks = clone(guideTalkDefault)
  currentTalk = this.guideTalks[0]

  showPopChoose = false

  qa = clone(guideQa)
  currentQa = {
    index: 0,
    item: this.qa[0],
  }

  ngOnInit(): void {
    this.setFirstCurrentTalk()
    this.showHero = true
  }

  setFirstCurrentTalk() {
    // if (preTalk) {
    //   preTalk.isActive = false
    // } else {
    this.currentTalk = this.guideTalks[0]
    this.setActiveTalk(this.currentTalk)
    // }
  }

  setActiveTalk(talk: GuideTalkItem) {
    this.npcTalk.isActive = talk.type === 'rw'
    this.heroTalk.isActive = !this.npcTalk.isActive
    if (this.npcTalk.isActive && !this.showNpc) {
      this.showNpc = true
    }
    if (talk.type === 'rw') {
      this.npcTalk.rwId = talk.rwId
      this.npcTalk.text = talk.text
    } else {
      this.heroTalk.rwId = this.g.hero.id
      this.heroTalk.text = talk.text
    }
  }

  answerQuestion(answer: AnswerItem) {
    if (answer.actionType === 1 && answer.actionValue === 1) {
      this.showPopChoose = false
      this.guideNext({ forceNext: true, nextId: answer.toId })
    } else {
      this.nextQuestion()
    }
    // console.log('Answer', answer.id, answer.text, answer.actionType, answer.actionValue)
  }

  nextQuestion() {
    this.currentQa.index++
    this.currentQa.item = this.qa[this.currentQa.index]
    if (this.currentQa.item === undefined) {
      // console.log('No more question')
      this.g.goToPage(PageEnum.City)
    }
  }

  guideNext(guideNextData: { forceNext?: boolean; nextId?: number }) {
    const { forceNext, nextId } = guideNextData
    if (this.showPopChoose) {
      return
    }
    const index = this.guideTalks.findIndex(item => item.id === this.currentTalk.id)
    if (this.currentTalk.actionType === 'pop-choose' && this.currentTalk.actionValue && !forceNext) {
      this.showPopChoose = true
      this.currentQa.item = this.qa.find(item => item.id === this.currentTalk.actionValue) || this.qa[0]
      this.npcTalk.isActive = false
      this.heroTalk.isActive = false
    } else {
      let nextTalk = this.guideTalks[index + 1]
      if (nextId) {
        nextTalk = this.guideTalks.find(g => g.id === nextId) || nextTalk
      }
      if (nextTalk) {
        this.currentTalk = nextTalk
        this.setActiveTalk(this.currentTalk)
      } else {
        this.showNpc = false
        this.showHero = false
        this.g.goToPage(PageEnum.City)
      }
    }
  }
}
