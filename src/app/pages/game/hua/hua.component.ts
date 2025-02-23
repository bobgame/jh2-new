import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { sampleItem, rand, clone } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { allHuaData, baseHuaCards } from './hua-data'
import { UiBtnCloseComponent } from '../../../common/ui/ui-btn-close/ui-btn-close.component'
import { PopChooseComponent } from '../../../common/pop/pop-choose/pop-choose.component'
import { exitQa } from '../../../data/base'
import { AnswerItem } from '../../../constants/interfaces/base.interface'
import { TaskService } from '../../../services/task.service'
import { KeyIds } from '../../../data/tasks/keys.interface'
@Component({
  selector: 'jh-hua',
  imports: [CommonModule, UiBtnCloseComponent, PopChooseComponent],
  templateUrl: './hua.component.html',
  styleUrl: './hua.component.scss',
})
export class HuaComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  gzList: HuaItem[] = [{ id: 1, img: 'ss' }]

  showDlResult = false
  canClose = false

  resultScore = 0
  step = 0

  activeGz = {
    id: 0,
  }

  showChoose = false

  exitQa = clone(exitQa)

  ngOnInit() {
    this.init()
    this.g.getKey(KeyIds.Count_Hua_Game).value++
  }

  init() {
    this.setDefault()
  }

  setDefault() {
    this.gzList = []
    let hua = sampleItem(allHuaData)
    if (this.g.huaTemp.id > 0) {
      hua = this.g.huaTemp.id
    }
    const randHuaCardList = clone(baseHuaCards).sort(() => rand() - 0.5)
    randHuaCardList.forEach(id => {
      this.gzList.push({
        id,
        img: `${hua}/${id}`,
      })
    })
  }

  huaClick(item: HuaItem) {
    if (this.activeGz.id === item.id || this.showDlResult) {
      return
    }
    if (this.activeGz.id > 0) {
      this.switchCard(item)
    } else {
      this.activeGz.id = item.id
    }
  }

  // Switch activeGz id's card and this card
  switchCard(item: HuaItem) {
    const activeGz = this.gzList.find(gz => gz.id === this.activeGz.id)!
    const tempHua = clone(activeGz)
    activeGz.img = item.img
    activeGz.id = item.id

    item.img = tempHua.img
    item.id = tempHua.id

    this.activeGz.id = 0

    this.step++
    this.g.getKey(KeyIds.Count_Hua_Move).value++

    this.checkResult()
  }
  // check gzList's card is is in order
  checkResult() {
    let isRight = true
    this.gzList.forEach((item, index) => {
      if (item.id !== index + 1) {
        isRight = false
      }
    })
    if (isRight) {
      this.showResult()
    }
  }

  showResult() {
    this.resultScore = Math.min(Math.max(100 - (this.step - 30) * 3, 0), 100)
    this.showDlResult = true
    this.g.getKey(KeyIds.Count_Hua_Success).value++
    this.g.getKey(KeyIds.Count_Hua_Total_Score).value += this.resultScore
    setTimeout(() => {
      this.canClose = true
    }, 1500)
  }

  closeResult() {
    if (!this.canClose) {
      return
    }
    this.goBack()
  }

  goBack() {
    let talkId = 0
    if (this.resultScore >= this.g.gmData.hua.target && this.g.gmData.hua.successTId > 0) {
      talkId = this.g.gmData.hua.successTId
    } else if (this.g.gmData.hua.failTId > 0) {
      talkId = this.g.gmData.hua.failTId
    }
    if (talkId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.hua.successTId = 0
        this.g.gmData.hua.failTId = 0
        this.g.gmData.hua.target = 0
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.hua.successTId = 0
      this.g.gmData.hua.failTId = 0
      this.g.gmData.hua.target = 0
    }
    this.g.goBack()
  }

  showExit() {
    this.showChoose = true
  }

  exitAnswer(answer: AnswerItem) {
    if (answer.actionValue === 1) {
      this.forceClose()
    } else {
      this.showChoose = false
    }
  }

  forceClose() {
    this.goBack()
  }
}

interface HuaItem {
  id: number
  img: string
}
