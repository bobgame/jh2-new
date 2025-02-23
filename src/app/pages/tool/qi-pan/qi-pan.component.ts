import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { clone, sampleItem } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { exitQa } from '../../../data/base'
import { QiData, allQiData } from '../../game/qi/qi-data'

@Component({
    selector: 'jh-qi-pan',
    imports: [CommonModule],
    templateUrl: './qi-pan.component.html',
    styleUrl: './qi-pan.component.scss'
})
export class QiPanComponent implements OnInit {
  constructor(private g: GlobalService) {}

  gzList: QiGzItem[] = [
    { id: 1, qz: 0, x: 1, y: 1 },
    { id: 2, qz: 1, x: 1, y: 1 },
    { id: 3, qz: 2, x: 0, y: 1 },
  ]

  showQiResult = false
  canClose = false

  result = false
  step = 0

  activeGz = {
    id: 0,
    x: 0,
    y: 0,
  }

  qiPan: QiData = {
    // 对-1
    id: 1,
    items: [[1, 0, 5]],
    key: [3, 7],
    blackFirst: false,
    isKill: false,
  }

  showChoose = false

  exitQa = clone(exitQa)
  keyQz = [0, 0]
  blackFirst = true
  isKill = false

  ngOnInit() {
    this.init()
  }

  init() {
    this.setDefault()
  }

  setDefault() {
    this.gzList = []
    this.qiPan.items = []
    let id = 1
    allQiData.forEach(item => {
      if (item.id >= id) {
        id = item.id + 1
      }
    })
    this.qiPan.id = id
    const qiPan = clone(this.qiPan)
    // const qiPan = clone(allQiData[2])
    this.qiPan.key = qiPan.key

    this.blackFirst = qiPan.blackFirst
    this.isKill = qiPan.isKill
    this.keyQz = clone(qiPan.key)
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 10; j++) {
        const id = i * 1 + j + 10
        const inQiData = qiPan.items.find(item => item[1] === i && item[2] === j)
        if (inQiData) {
          this.gzList.push({ id, qz: inQiData[0], x: i, y: j })
        } else {
          this.gzList.push({ id, qz: 0, x: i, y: j })
        }
      }
    }
  }

  qiClick(item: QiGzItem) {
    item.qz++
    if (item.qz > 2) {
      item.qz = 0
    }

    this.activeGz.id = item.id
    this.activeGz.x = item.x
    this.activeGz.y = item.y
  }

  setKey() {
    this.qiPan.key = [this.activeGz.x, this.activeGz.y]
    // console.log(`设置成功：${this.activeGz.x} - ${this.activeGz.y}`)
  }

  checkResult() {
    this.qiPan.items = []
    this.gzList.forEach(item => {
      if (item.qz > 0) {
        this.qiPan.items.push([item.qz, item.x, item.y])
      }
    })
    // console.log(JSON.stringify(this.qiPan))
  }

  showResult() {
    this.showQiResult = true
    setTimeout(() => {
      this.canClose = true
    }, 1500)
  }

  closeResult() {
    if (!this.canClose) {
      return
    }
    this.g.current.cityGroup = CityGroupEnum.JiaoWai
    this.g.goToPage(PageEnum.City)
  }
}

interface QiGzItem {
  id: number
  qz: number
  x: number
  y: number
}
