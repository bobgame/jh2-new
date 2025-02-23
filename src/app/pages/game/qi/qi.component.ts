import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { clone, sampleItem } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { exitQa } from '../../../data/base'
import { allQiData } from './qi-data'
import { TaskService } from '../../../services/task.service'
import { jiaoWaiCityMap, CityIdEnumSp } from '../../city/city-data'
import { TaskTalkIds } from '../../../data/tasks/task.enum'
import { KeyIds } from '../../../data/tasks/keys.interface'

@Component({
    selector: 'jh-qi',
    imports: [CommonModule],
    templateUrl: './qi.component.html',
    styleUrl: './qi.component.scss'
})
export class QiComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

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
    this.g.getKey(KeyIds.Count_DuiYi_Game).value++
  }

  setDefault() {
    this.gzList = []
    const qiPan = sampleItem(allQiData)
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
    if (item.qz > 0 || this.showQiResult) {
      return
    }
    this.activeGz.id = item.id
    this.activeGz.x = item.x
    this.activeGz.y = item.y
  }

  checkResult() {
    if (this.showQiResult) {
      return
    }
    if (this.activeGz.x === this.keyQz[0] && this.activeGz.y === this.keyQz[1]) {
      this.result = true
      this.g.getKey(KeyIds.Count_DuiYi_Success).value++
    } else {
      this.result = false
    }
    this.showResult()
  }

  showResult() {
    this.showQiResult = true
    setTimeout(() => {
      this.canClose = true
    }, 1000)
  }

  closeResult() {
    if (!this.canClose) {
      return
    }
    let talkId = 0
    if (this.result && this.g.gmData.qi.successTId > 0) {
      talkId = this.g.gmData.qi.successTId
    } else if (!this.result && this.g.gmData.qi.failTId > 0) {
      talkId = this.g.gmData.qi.failTId
    }
    if (talkId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.qi.successTId = 0
        this.g.gmData.qi.failTId = 0
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.qi.successTId = 0
      this.g.gmData.qi.failTId = 0
    }
    this.g.goBack()
  }
}

interface QiGzItem {
  id: number
  qz: number
  x: number
  y: number
}
