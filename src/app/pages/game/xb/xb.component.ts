import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UiFrameComponent } from '../../../common/ui/ui-frame/ui-frame.component'
import { GlobalService } from '../../../services/global.service'
import { clone } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { ZbIdEnum } from '../../../constants/enums/zb.enum'
import { XbItem, xbAllItems, xbBaseItems } from './xb-data'
import { CityIdEnum } from '../../../constants/enums/city.enum'
import { TaskService } from '../../../services/task.service'
import { environment } from '../../../../environments/environment'
import { KeyIds } from '../../../data/tasks/keys.interface'

@Component({
    selector: 'jh-xb',
    imports: [CommonModule, UiFrameComponent],
    templateUrl: './xb.component.html',
    styleUrl: './xb.component.scss'
})
export class XbComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  xbList: XbItem[] = []

  gzList = clone(new Array(15).fill({ img: 'not-get' }))

  currentGzIndex = -1
  inWork = false
  showXbResult = false
  xbProgress = 0
  result = {
    img: 'not-get',
    name: '未知',
  }
  xbCount = 0

  ngOnInit() {
    this.init()
  }

  init() {
    if (xbAllItems[this.g.current.city.id]) {
      this.xbList = clone(xbAllItems[this.g.current.city.id])
    } else {
      this.xbList = clone(xbBaseItems)
    }
    if (this.g.hero.jn.xb > 0) {
      const emptyItem = this.xbList.find(item => item.id === 0)
      if (emptyItem) {
        emptyItem.rate = 10
      }
    }
    this.g.gmData.xb.get = false
    this.g.getKey(KeyIds.Count_XunBao_Game).value++
  }

  xb(index: number) {
    this.currentGzIndex = index
    const currentGz = this.gzList[index]
    if (this.inWork || currentGz.img !== 'not-get') {
      return
    }
    this.inWork = true
    this.showXbResult = false
    setTimeout(() => {
      this.xbProgress = 100
    }, 0)
    setTimeout(() => {
      // this.inWork = false
      this.addXbItem(index)
    }, 700)
  }

  addXbItem(index: number) {
    const currentGz = this.gzList[index]
    if (currentGz.img === 'not-get') {
      this.xbCount++
      const totalRate = this.xbList.reduce((total, item) => total + item.rate, 0)
      const rand = Math.random() * totalRate
      let currentRate = 0
      let randItem = this.xbList[0]
      for (const item of this.xbList) {
        currentRate += item.rate
        if (rand <= currentRate) {
          randItem = item
          break
        }
      }
      // if (!environment.production) {
      //   randItem.id = 0
      // }
      if (randItem.id > 0) {
        const gotItem = this.g.getZb(randItem.id)
        if (gotItem) {
          this.gzList[index].img = gotItem.avatar + ''
          this.result.img = gotItem.avatar + ''
          this.result.name = gotItem.name
          this.g.addZb(gotItem.id)
          this.showXbResult = true
          this.g.gmData.xb.get = true
          this.g.getKey(KeyIds.Count_XunBao_Success).value++
        }
      } else {
        this.gzList[index].img = 'empty'
        this.checkResult()
      }
      this.g.getKey(KeyIds.Count_XunBao_Total).value++
    }
  }

  closeResult() {
    this.showXbResult = false
    this.inWork = false
    this.xbProgress = 0
    this.goBack()
  }

  checkResult() {
    this.inWork = false
    this.xbProgress = 0
    if (this.xbCount >= 3) {
      this.goBack()
    }
  }

  goBack() {
    let talkId = 0
    if (this.g.gmData.xb.get && this.g.gmData.xb.successTId > 0) {
      talkId = this.g.gmData.xb.successTId
    } else if (this.g.gmData.xb.failTId > 0) {
      talkId = this.g.gmData.xb.failTId
    }
    // console.log(talkId)
    if (talkId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.xb.successTId = 0
        this.g.gmData.xb.failTId = 0
        this.g.gmData.xb.get = false
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.xb.successTId = 0
      this.g.gmData.xb.failTId = 0
      this.g.gmData.xb.get = false
    }

    this.g.goBack()
  }
}
