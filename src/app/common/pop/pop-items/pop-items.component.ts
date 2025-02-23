import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CityGroupEnum, PageEnum } from '../../../constants/enums/base.enum'
import { GlobalService } from '../../../services/global.service'
import { clone, randInt } from '../../../units/Base'
import { UiBtnCloseComponent } from '../../ui/ui-btn-close/ui-btn-close.component'
import { WpIdEnum } from '../../../constants/enums/wp.enum'
import { WpType } from '../../../data/wp'
import { ZbSubType, ZbType } from '../../../data/zb'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { IntPipe } from '../../../pipes/int.pipe'
import { CityService } from '../../../services/city.service'
import { citySaleItems } from '../../../pages/city/city-data'
import { PopChooseComponent } from '../pop-choose/pop-choose.component'
import { itemBaseQa } from './items-data'
import { AnswerItem } from '../../../constants/interfaces/base.interface'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'jh-pop-items',
  standalone: true,
  imports: [CommonModule, UiBtnCloseComponent, PopChooseComponent, NgScrollbarModule, IntPipe],
  templateUrl: './pop-items.component.html',
  styleUrl: './pop-items.component.scss',
})
export class PopItemsComponent implements OnInit {
  constructor(
    public g: GlobalService,
    private c: CityService,
  ) {}

  @Output() closePop = new EventEmitter()

  categories: PopItemCategory[] = [
    { id: 1, in: 'wp', type: 'zh', subType: '', name: '杂货', valueText: '生命' },
    { id: 2, in: 'wp', type: 'cy', subType: '', name: '草药', valueText: '生命' },
    { id: 3, in: 'wp', type: 'yw', subType: '', name: '药丸', valueText: '生命' },
    { id: 4, in: 'zb', type: 'weapon', subType: 'sword', name: '刀剑', valueText: '武功' },
    { id: 5, in: 'zb', type: 'weapon', subType: 'rod', name: '棍子', valueText: '武功' },
    { id: 6, in: 'zb', type: 'weapon', subType: 'glove', name: '拳套', valueText: '武功' },
    { id: 7, in: 'zb', type: 'weapon', subType: 'hidden', name: '暗器', valueText: '武功' },
    { id: 8, in: 'zb', type: 'armor', subType: 'armor', name: '防具', valueText: '体力上限' },
    { id: 9, in: 'zb', type: 'horse', subType: 'horse', name: '坐骑', valueText: '轻功' },
  ]

  currentCategory: PopItemCategory = this.categories[0]

  emptyItems = new Array(18).fill(0)

  items: PopItem[] = [
    {
      id: WpIdEnum.TuRou,
      name: '兔肉',
      desc: '兔肉，可恢复体力',
      avatar: '1',
      type: 'zh',
      value: 1,
      price: 100,
      count: 1,
    },
  ]

  currentItem: PopItem | undefined = undefined

  showChoose = false
  itemQa = clone(itemBaseQa)
  activeItem!: PopItem

  ngOnInit(): void {
    if (!environment.production) {
      // this.addTestItems() // for test
    }
    this.init()
  }

  addTestItems() {
    // this.g.hero.jq = 1000000000
    this.g.wps.forEach(wp => {
      this.g.addWp(wp.id, randInt(10, 1))
    })
    this.g.zbs.forEach(zb => {
      this.g.addZb(zb.id, randInt(10, 1))
    })
    // console.log(this.g.zbs)
    // console.log(this.g.hero)
  }

  init() {
    if (!environment.production) {
      // this.g.hero.jn.sy = 1
      // this.g.hero.sw = 100
      // this.g.addWp(WpIdEnum.PuEr, 20)
    }
    this.setCategoryItems()
  }

  tabToLeft() {
    this.switchTab(true)
  }
  tabToRight() {
    this.switchTab()
  }

  switchTab(reverse = false) {
    const index = this.categories.findIndex(c => c.id === this.currentCategory.id)
    if (reverse) {
      this.currentCategory = this.categories[index - 1] || this.categories[this.categories.length - 1]
    } else {
      this.currentCategory = this.categories[index + 1] || this.categories[0]
    }
    this.setCategoryItems()
  }

  setCategoryItems() {
    this.items = []
    if (this.currentCategory.in === 'zb') {
      this.g.zbs.forEach(zb => {
        const inHero = this.g.hero.zbs.find(item => item.id === zb.id)
        if (
          zb.type === this.currentCategory.type &&
          zb.subType === this.currentCategory.subType &&
          ((inHero && this.g.itemData.type !== 'buy') || (this.g.itemData.type === 'buy' && citySaleItems.zb.includes(zb.id)))
        ) {
          this.items.push({
            id: zb.id,
            name: zb.name,
            desc: zb.desc,
            avatar: zb.avatar,
            type: zb.type,
            value: zb.value,
            price: this.c.getItemPrice(zb.id, 'zb'),
            count: inHero?.count || 0,
            canEquip: true,
            canUse: false,
          })
        }
      })
    } else {
      this.g.wps.forEach(wp => {
        const inHero = this.g.hero.wps.find(item => item.id === wp.id)
        if (
          wp.type === this.currentCategory.type &&
          ((inHero && this.g.itemData.type !== 'buy') || (this.g.itemData.type === 'buy' && citySaleItems.wp.includes(wp.id)))
        ) {
          this.items.push({
            id: wp.id,
            name: wp.name,
            desc: wp.desc,
            avatar: wp.avatar,
            type: wp.type,
            value: wp.value,
            price: this.c.getItemPrice(wp.id, 'wp'),
            count: inHero?.count || 0,
            canUse: true,
            canEquip: false,
          })
        }
      })
    }
    // console.log('this.items', this.items)
    if (this.items.length > 0) {
      const tempItem = this.items.find(i => i.id === this.currentItem?.id && i.type === this.currentItem?.type)
      if (!this.currentItem || !tempItem) {
        this.selectItem(this.items[0])
      } else if (this.currentItem.count !== tempItem.count) {
        this.currentItem.count = tempItem.count
      }
    } else {
      this.currentItem = undefined
    }
    // console.log('this.currentItem', this.currentItem)
  }

  selectItem(item: PopItem) {
    this.currentItem = item
    this.currentItem.canUnEquip = false
    this.currentItem.canEquip = false
    this.currentItem.canUse = false
    if (this.currentCategory.in === 'zb') {
      const typeEquipItem = this.g.hero.equip[item.type as ZbType]
      if (typeEquipItem.active && typeEquipItem.id === item.id) {
        item.canUnEquip = true
      } else if (!typeEquipItem.active || typeEquipItem.id !== item.id) {
        item.canEquip = true
      }
    } else {
      item.canUse = true
    }
  }

  equipZb(item: PopItem) {
    this.g.equipZb(item.id)
    item.canEquip = false
    item.canUnEquip = true
  }

  unEquipZb(item: PopItem) {
    this.g.unEquipZb(item.type as ZbType)
    item.canEquip = true
    item.canUnEquip = false
  }

  useWp(item: PopItem) {
    this.g.useWp(item.id)
    item.count -= 1
    this.setCategoryItems()
  }

  buy(item: PopItem) {
    this.activeItem = clone(item)
    this.itemQa = clone(itemBaseQa)
    this.itemQa.question = `买入多少 ${item.name}？`
    this.itemQa.answers = [{ id: 1, text: '一个', actionType: 1, actionValue: 1 }]
    if (this.g.hero.jq >= item.price * 10 && item.count < 190) {
      this.itemQa.answers.push({ id: 2, text: '十个', actionType: 1, actionValue: 10 })
    }
    if (this.g.hero.jq >= item.price * 100 && item.count < 100) {
      this.itemQa.answers.push({ id: 3, text: '一百个', actionType: 1, actionValue: 100 })
    }
    this.itemQa.answers.push({ id: 4, text: '不买了', actionType: 3, actionValue: 0 })
    this.showChoose = true
  }
  sale(item: PopItem) {
    this.activeItem = clone(item)
    this.itemQa = clone(itemBaseQa)
    this.itemQa.question = `卖掉多少 ${item.name}？`
    this.itemQa.answers = [{ id: 1, text: '一个', actionType: 2, actionValue: 1 }]
    if (item.count >= 10) {
      this.itemQa.answers.push({ id: 2, text: '十个', actionType: 2, actionValue: 10 })
    }
    if (item.count > 10) {
      this.itemQa.answers.push({ id: 3, text: '所有', actionType: 2, actionValue: 100 })
    }
    this.itemQa.answers.push({ id: 4, text: '不卖了', actionType: 3, actionValue: 0 })
    this.showChoose = true
  }

  exitAnswer(answer: AnswerItem) {
    if (answer.actionType === 1) {
      this.g.useJq(answer.actionValue * this.activeItem.price)
      if (this.currentCategory.in === 'wp') {
        this.g.addWp(this.activeItem.id, answer.actionValue)
      } else {
        this.g.addZb(this.activeItem.id, answer.actionValue)
      }
      this.setCategoryItems()
    } else if (answer.actionType === 2) {
      let count = answer.actionValue
      if (answer.actionValue === 100) {
        count = this.activeItem.count
      }
      if (this.currentCategory.in === 'wp') {
        this.g.removeWp(this.activeItem.id, count)
      } else {
        this.g.removeZb(this.activeItem.id, count)
      }
      this.g.addJq((count * this.activeItem.price) / 2)
      this.setCategoryItems()
    }
    this.showChoose = false
  }

  backToHome() {
    this.g.goToPage(PageEnum.Home)
  }

  close() {
    if (this.g.itemData.type === 'buy' || this.g.itemData.type === 'sale') {
      this.g.current.cityGroup = CityGroupEnum.DangPu
    }
    this.g.show.pop.items = false
  }
}

interface PopItem {
  id: number
  name: string
  desc: string
  avatar: string
  type: WpType | ZbType
  value: number
  price: number
  count: number
  canUse?: boolean
  canEquip?: boolean
  canUnEquip?: boolean
}

interface PopItemCategory {
  id: number
  in: 'wp' | 'zb'
  type: WpType | ZbType
  subType: ZbSubType
  name: string
  valueText: string
}
