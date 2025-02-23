import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UiFrameComponent } from '../../common/ui/ui-frame/ui-frame.component'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { ShowTimePipe } from '../../pipes/show-time.pipe'
import { AnswerItem, QaItem, SaveItem } from '../../constants/interfaces/base.interface'
import { PopChooseComponent } from '../../common/pop/pop-choose/pop-choose.component'
import { SlEnum } from '../../data/base'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { clone } from '../../units/Base'

@Component({
    selector: 'jh-sl',
    imports: [CommonModule, UiFrameComponent, ShowTimePipe, PopChooseComponent, NgScrollbarModule],
    templateUrl: './sl.component.html',
    styleUrl: './sl.component.scss'
})
export class SlComponent implements OnInit {
  constructor(public g: GlobalService) {}

  PageEnum = PageEnum

  slItems: SaveItem[] = []

  select = {
    index: 0,
  }

  isLoading = false

  qa: QaItem = {
    id: 1,
    question: '保存游戏？',
    answers: [
      { id: 1, text: '保存', actionType: 1, actionValue: 1 },
      { id: 2, text: '取消', actionType: 2, actionValue: 1 },
    ],
  }
  showQa = false

  ngOnInit(): void {
    this.init()
  }

  init() {
    // console.log(this.g.allSlItems)
    this.slItems = []
    this.g.allSlItems.forEach(item => {
      // console.log(item)
      if (item.active) {
        // console.log('active')
        this.slItems.push(clone(item))
      }
    })
    // console.log(this.slItems)
  }

  selectSl(index: number) {
    if (this.isLoading) {
      return
    }
    if (this.g.current.page === PageEnum.Home) {
      this.isLoading = true
      this.g.loadGame(index).finally(() => {
        this.g.show.pop.sl = false
      })
    } else {
      this.qa.question = '覆盖存档？'
      this.select.index = index
      this.showQa = true
    }
  }

  newSl() {
    if (this.isLoading) {
      return
    }
    this.select.index = this.slItems.length
    this.qa.question = '新建存档？'
    this.showQa = true
  }

  answer(answer: AnswerItem) {
    if (answer.actionType === 1) {
      this.save()
    } else {
      this.showQa = false
    }
  }

  save() {
    this.isLoading = true
    this.g.saveGame(this.select.index).finally(() => {
      // console.log(this.g.allSlItems)
      this.isLoading = false
      this.showQa = false
      setTimeout(() => {
        this.init()
      }, 0)
    })
  }

  close() {
    this.g.show.pop.sl = false
  }
}
