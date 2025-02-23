import { Component, OnInit } from '@angular/core'
import { HomeFanComponent } from './home-fan/home-fan.component'
import { HomeBgComponent } from './home-bg/home-bg.component'
import { CommonModule } from '@angular/common'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { HomeEndComponent } from './home-end/home-end.component'
import { environment } from '../../../environments/environment'
import { GameoverEnum, gameoverTexts } from '../../data/gameover'

@Component({
  selector: 'jh-home',
  imports: [CommonModule, HomeFanComponent, HomeBgComponent, HomeEndComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public g: GlobalService) {}

  PageEnum = PageEnum
  showText = false
  showFan = false
  fanIn = false

  timer = {
    one: null,
    two: null,
    three: null,
  }
  timerOne = 0
  timerTwo = 0
  timerThree = 0

  ngOnInit(): void {
    this.g.newGame()

    // if (!environment.production) {
    //   this.g.od.texts = gameoverTexts[GameoverEnum.BaiBuChuanYang]
    //     .replace(/\[zj\]/g, this.g.hero.name)
    //     .replace(/\“/g, '﹃')
    //     .replace(/\”/g, '﹄')
    //   this.g.od.show = true
    // }

    if (!this.g.od.show) {
      this.showTextAndFan()
    }
  }

  removeEnd() {
    setTimeout(() => {
      this.g.od.show = false
      this.showTextAndFan()
    }, 0)
  }

  showTextAndFan() {
    this.timerOne = window.setTimeout(() => {
      this.showText = true
    }, 300)
    this.timerTwo = window.setTimeout(() => {
      this.showFan = true
      this.fanIn = true
    }, 9.6 * 1000)
    this.timerThree = window.setTimeout(() => {
      this.showText = false
    }, 9.8 * 1000)
  }

  skipAnimation() {
    if (this.showFan || this.g.od.show) {
      return
    }
    clearTimeout(this.timerOne)
    clearTimeout(this.timerTwo)
    clearTimeout(this.timerThree)
    this.showText = false
    this.showFan = true
    this.fanIn = true
  }
}
