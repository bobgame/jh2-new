import { CommonModule } from '@angular/common'
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { clone, rand } from '../../../units/Base'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { exitQa } from '../../../data/base'
import { TaskService } from '../../../services/task.service'
import { KeyIds } from '../../../data/tasks/keys.interface'

@Component({
  selector: 'jh-qin',
  imports: [CommonModule],
  templateUrl: './qin.component.html',
  styleUrl: './qin.component.scss',
})
export class QinComponent implements OnInit, OnDestroy {
  constructor(
    private g: GlobalService,
    private t: TaskService,
  ) {}

  qinData = {
    top: { progress: 0, point: 50, showError: false, isGood: false },
    middle: { progress: 0, point: 60, showError: false, isGood: false },
    bottom: { progress: 0, point: 70, showError: false, isGood: false },
  }

  qinTimer = {
    top: 0,
    middle: 0,
    bottom: 0,
  }
  leftTimer = 0

  showQinResult = false
  canClose = false

  leftTime = 15
  score = 0
  rightCount = 0
  combo = 0

  showChoose = false

  exitQa = clone(exitQa)
  keyQz = [0, 0]
  blackFirst = true
  isKill = false

  speed = 50

  canBeGood = 7

  ngOnInit() {
    this.init()
    this.g.getKey(KeyIds.Count_FuQin_Game).value++
  }

  ngOnDestroy(): void {
    this.clearAllTimer()
  }

  init() {
    // this.setDefault()
    this.startSetPoints()
    this.leftTimer = window.setInterval(() => {
      this.leftTime--
      if (this.leftTime <= 0) {
        this.leftTime = 0
        this.showResult()
      }
    }, 1000)
  }

  // setDefault() {
  //   this.qinData.top.point = this.getRandPointPos()
  //   this.qinData.middle.point = this.getRandPointPos()
  //   this.qinData.bottom.point = this.getRandPointPos()
  // }

  startSetPoints() {
    const randPoints = ['top', 'middle', 'bottom'].sort(() => Math.random() - 0.5)
    this.setPoints(randPoints[0] as QinPos)
    this.qinData[randPoints[0] as QinPos].point = this.getRandPointPos()
    setTimeout(() => {
      this.setPoints(randPoints[1] as QinPos)
      this.qinData[randPoints[1] as QinPos].point = this.getRandPointPos()
    }, 500)
    setTimeout(() => {
      this.setPoints(randPoints[2] as QinPos)
      this.qinData[randPoints[2] as QinPos].point = this.getRandPointPos()
    }, 1000)
  }

  setPoints(pos: QinPos) {
    clearInterval(this.qinTimer[pos])
    this.qinData[pos].showError = false
    this.qinData[pos].isGood = false
    this.qinTimer[pos] = window.setInterval(() => {
      this.qinData[pos].progress += 1.3
      if (this.qinData[pos].progress > this.qinData[pos].point + this.canBeGood) {
        this.pointError(pos)
      }
    }, this.speed)
  }

  pointError(pos: QinPos) {
    this.combo = 0
    this.qinData[pos].showError = true
    this.leftTime -= 0.5

    if (this.leftTime < 0) {
      this.leftTime = 0
    }
    clearInterval(this.qinTimer[pos])
    setTimeout(() => {
      this.qinData[pos].progress = 0
      this.qinData[pos].point = this.getRandPointPos()
      this.setPoints(pos)
    }, 500)
  }

  pointGood(pos: QinPos) {
    this.leftTime += 1.5
    if (this.leftTime > 15) {
      this.leftTime = 15
    }
    this.score += 4
    if (this.combo > 0) {
      this.score += 4
    }
    if (this.score > 100) {
      this.score = 100
    }
    this.combo++
    this.rightCount++
    this.qinData[pos].isGood = true
    if (this.rightCount >= 25 || this.score >= 100) {
      this.showResult()
    } else {
      clearInterval(this.qinTimer[pos])
      setTimeout(() => {
        this.qinData[pos].progress = 0
        this.qinData[pos].point = this.getRandPointPos()
        this.setPoints(pos)
      }, 600)
    }
  }

  getRandPointPos() {
    return Math.floor(rand() * 60) + 20
  }

  qinClick(event: Event, pos: QinPos, inPos = false) {
    if (this.showQinResult) {
      this.clearAllTimer()
      return
    }
    if (this.qinData[pos].isGood || this.qinData[pos].showError) {
      return
    }
    this.g.getKey(KeyIds.Count_FuQin_Hit_Total).value++
    if (inPos && this.qinData[pos].progress > this.qinData[pos].point - this.canBeGood) {
      this.pointGood(pos)
      this.g.getKey(KeyIds.Count_FuQin_Hit_Success).value++
      event.stopPropagation()
    } else {
      this.pointError(pos)
    }
  }

  checkResult() {
    if (this.showQinResult) {
      return
    }
    this.showResult()
  }

  showResult() {
    this.clearAllTimer()
    this.showQinResult = true
    this.g.getKey(KeyIds.Count_FuQin_Total_Score).value += this.score
    setTimeout(() => {
      this.canClose = true
    }, 1500)
  }

  closeResult() {
    if (!this.canClose) {
      return
    }
    let talkId = 0
    if (this.score >= this.g.gmData.qin.target && this.g.gmData.qin.successTId > 0) {
      talkId = this.g.gmData.qin.successTId
    } else if (this.g.gmData.qin.failTId > 0) {
      talkId = this.g.gmData.qin.failTId
    }
    if (talkId > 0) {
      this.t.isInTask = true
      setTimeout(() => {
        this.t.taskData.talkId = talkId
        this.t.taskData.show = true
        this.g.gmData.qin.successTId = 0
        this.g.gmData.qin.failTId = 0
        this.g.gmData.qin.target = 0
        setTimeout(() => {
          this.t.isInTask = false
        }, 20)
      }, 0)
    } else {
      this.g.gmData.qin.successTId = 0
      this.g.gmData.qin.failTId = 0
      this.g.gmData.qin.target = 0
    }
    this.g.goBack()
  }

  clearAllTimer() {
    window.clearInterval(this.qinTimer.top)
    window.clearInterval(this.qinTimer.middle)
    window.clearInterval(this.qinTimer.bottom)
    window.clearInterval(this.leftTimer)
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '8': {
        this.qinClick(event, 'top', true)
        break
      }
      case '5': {
        this.qinClick(event, 'middle', true)
        break
      }
      case '2': {
        this.qinClick(event, 'bottom', true)
        break
      }
      default:
        break
    }
  }
}

type QinPos = 'top' | 'middle' | 'bottom'
