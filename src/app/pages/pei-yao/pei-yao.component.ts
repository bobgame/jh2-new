import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { UiFrameComponent } from '../../common/ui/ui-frame/ui-frame.component'
import { UiBtnCloseComponent } from '../../common/ui/ui-btn-close/ui-btn-close.component'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { GlobalService } from '../../services/global.service'
import { clone } from '../../units/Base'
import { exitQa } from '../../data/base'
import { PopChooseComponent } from '../../common/pop/pop-choose/pop-choose.component'
import { AnswerItem } from '../../constants/interfaces/base.interface'
import { CityGroupEnum, HeroIdEnum, PageEnum } from '../../constants/enums/base.enum'
import { IntPipe } from '../../pipes/int.pipe'
import { WpIdEnum } from '../../constants/enums/wp.enum'
import { WpType } from '../../data/wp'
import { pyItems } from './pei-yao-data'
import { UiProgressOneComponent } from '../../common/ui/ui-progress-one/ui-progress-one.component'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'jh-pei-yao',
  standalone: true,
  imports: [CommonModule, UiFrameComponent, UiBtnCloseComponent, NgScrollbarModule, PopChooseComponent, IntPipe, UiProgressOneComponent],
  templateUrl: './pei-yao.component.html',
  styleUrl: './pei-yao.component.scss',
})
export class PeiYaoComponent implements OnInit {
  constructor(public g: GlobalService) {}
  showChoose = false
  showPYing = false
  result = {
    show: false,
    img: '',
    name: '',
  }

  emptyItems = new Array(18).fill(0)
  exitQa = clone(exitQa)
  rdCyItemIds: WpIdEnum[] = []
  topCyItemIds: WpIdEnum[] = []
  cyItems: WpIdEnum[] = []
  ywItems: PopItem[] = []

  currentItem: PopItem | undefined = undefined

  toastData: ToastData = {
    showToast: false,
    type: 'home',
    text: '',
  }

  pyData = {
    showTop: false,
    showBottom: false,
    showLine: false,
  }

  ngOnInit(): void {
    // for test
    if (!environment.production) {
      // this.g.wps.forEach(wp => {
      //   this.g.addWp(wp.id, 20)
      // })
    }
    if (!this.g.current.guides.py.home && this.g.hero.id === HeroIdEnum.WuMing) {
      this.toastData = {
        showToast: true,
        type: 'home',
        text: '选择要配置的药。配置原料不足的药名字为灰色。',
      }
      this.g.current.guides.py.home = true
    }
    this.initYwItems()
    this.initCyItems()
  }

  initYwItems() {
    this.ywItems = []
    this.g.wps.forEach(wp => {
      if (wp.type === 'yw') {
        const inPY = pyItems.find(py => py.id === wp.id)
        if (inPY) {
          const inHero = this.g.hero.wps.find(item => item.id === wp.id)
          const needTemp = this.getCanPei(inPY.needs)
          this.ywItems.push({
            id: wp.id,
            name: wp.name,
            desc: wp.desc,
            avatar: wp.avatar,
            value: wp.value,
            count: inHero ? inHero.count : 0,
            needs: inPY.needs,
            canPei: needTemp.can,
            needLen: wp.id === WpIdEnum.JiuHuaYuLuWan ? 1 : needTemp.needLen,
          })
        }
      }
    })
    if (this.ywItems.length > 0) {
      this.currentItem = this.ywItems[0]
    }
  }

  initCyItems() {
    this.cyItems = []
    this.g.wps.forEach(wp => {
      if (wp.type === 'cy') {
        this.cyItems.push(wp.id)
      }
    })
  }

  getCanPei(needs: PopPYNeed[]) {
    let can = true
    let needLen = 0
    needs.forEach(need => {
      const inHero = this.g.hero.wps.find(item => item.id === need.id)
      const count = inHero ? inHero.count : 0
      if (count < need.count) {
        can = false
      }
      needLen += need.count
    })
    return { can, needLen }
  }

  removeTopCyItem(id: WpIdEnum) {
    this.topCyItemIds = this.topCyItemIds.filter(item => item !== id)
  }

  selectCyItem(id: WpIdEnum) {
    if (this.currentItem && this.topCyItemIds.length < this.currentItem.needLen) {
      this.topCyItemIds.push(id)
    }
    if (this.currentItem && this.topCyItemIds.length >= this.currentItem.needLen) {
      this.checkPYResult()
    }
    if (!environment.production) {
      // console.log(this.rdCyItemIds, this.topCyItemIds)
    }
  }

  checkPYResult() {
    let isRight = true
    this.rdCyItemIds.forEach((id, index) => {
      if (id !== this.topCyItemIds[index]) {
        isRight = false
      }
    })
    if (isRight && this.currentItem) {
      this.g.addWp(this.currentItem?.id, 1)
      this.result.img = this.currentItem.avatar
      this.result.name = this.currentItem.name
      this.openResult()
    } else {
      this.toastData = {
        showToast: true,
        type: 'fail',
        text: '配药失败',
      }
    }
    if (this.currentItem) {
      this.currentItem.needs.forEach(need => {
        this.g.removeWp(need.id, need.count)
      })
    }
  }

  peiYao(item: PopItem) {
    this.rdCyItemIds = []
    this.currentItem?.needs.forEach(need => {
      const len = this.currentItem?.id === WpIdEnum.JiuHuaYuLuWan ? 1 : need.count
      for (let i = 0; i < len; i++) {
        this.rdCyItemIds.push(need.id)
      }
    })
    this.rdCyItemIds = this.rdCyItemIds.sort(() => Math.random() - 0.5)
    this.topCyItemIds = clone(this.rdCyItemIds)
    this.showPYing = true
    if (!this.g.current.guides.py.pei && this.g.hero.id === HeroIdEnum.WuMing) {
      this.g.current.guides.py.pei = true
      this.pyData.showTop = false
      this.pyData.showLine = false
      this.pyData.showBottom = false
      this.toastData = {
        showToast: true,
        type: 'pei',
        text: '必须在有限的时间内，记住所需的药材以及顺序。如果准备好了，就开始吧。',
      }
    } else {
      this.pyAnim()
    }
  }

  closeToast() {
    if (this.toastData.type === 'pei') {
      this.pyAnim()
    } else if (this.toastData.type === 'fail') {
      this.backToHome()
    }
    this.toastData.showToast = false
  }

  pyAnim() {
    this.pyData.showTop = true
    this.pyData.showLine = true
    this.pyData.showBottom = false
    setTimeout(() => {
      this.topCyItemIds = []
      this.pyData.showLine = false
      this.pyData.showBottom = true
    }, 6000)
  }

  selectItem(item: PopItem) {
    this.currentItem = item
  }

  showExit() {
    this.showChoose = true
  }

  forceClose() {
    this.g.current.cityGroup = CityGroupEnum.ZiZhai
    this.g.goToPage(PageEnum.City)
  }

  exitAnswer(answer: AnswerItem) {
    if (answer.actionValue === 1) {
      this.forceClose()
    } else {
      this.showChoose = false
    }
  }

  backToHome() {
    this.initYwItems()
    this.showPYing = false
  }

  openResult() {
    this.result.show = true
  }
  closeResult() {
    this.result.show = false
    this.backToHome()
  }
}

interface PopItem {
  id: number
  name: string
  desc: string
  avatar: string
  value: number
  count: number
  needs: PopPYNeed[]
  needLen: number
  canPei: boolean
}
interface PopPYNeed {
  id: WpIdEnum
  count: number
}

interface ToastData {
  showToast: boolean
  type: 'home' | 'pei' | 'fail'
  text: string
}
