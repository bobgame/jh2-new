import { Component, OnInit } from '@angular/core'
import { clone } from '../../units/Base'
import { CardCategory, CardItem, cardsCategories } from './cards-data'
import { CommonModule } from '@angular/common'
import { UiBtnCloseComponent } from '../../common/ui/ui-btn-close/ui-btn-close.component'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { UiBtnBackComponent } from '../../common/ui/ui-btn-back/ui-btn-back.component'
import { defaultZbs } from '../../data/zb'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { defaultJns } from '../../data/jn'
import { heroes } from '../../data/hero'
import { defaultRws } from '../../data/rw'
import { defaultWys } from '../../data/wy'
import { defaultWps } from '../../data/wp'
import { defaultMjs } from '../../data/mj'
import { defaultChs } from '../../data/ch'
import { environment } from '../../../environments/environment'

@Component({
    selector: 'jh-cards',
    imports: [CommonModule, NgScrollbarModule, UiBtnCloseComponent, UiBtnBackComponent],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private g: GlobalService) {}

  zjs = clone(heroes)
  rws = clone(defaultRws).filter(rw => rw.id < 300)
  jns = clone(defaultJns)
  wys = clone(defaultWys)
  wps = clone(defaultWps)
  zbs = clone(defaultZbs)
  mjs = clone(defaultMjs)
  chs = clone(defaultChs)

  cardsCategories = clone(cardsCategories)
  currentCategory: CardCategory = this.cardsCategories[0]

  cards: CardItem[] = [{ id: 1, name: '画符剑', desc: 'xxx', categoryKey: 'zb', got: true, pre: 'zb', img: '1' }]

  currentCard: CardItem = this.cards[0]

  isShowCard = false
  isShowCardDetail = false

  ngOnInit(): void {
    this.init()
    // this.selectCategory(cardsCategories[5])
    // this.showCardDetail(this.cards[0])
  }

  init() {
    this.cardsCategories.forEach(category => {
      // category.got = 0
      switch (category.key) {
        case 'zj': {
          category.total = this.zjs.length
          break
        }
        case 'rw': {
          const rws = this.rws.filter(rw => rw.id < 100)
          category.total = rws.length
          break
        }
        case 'jn': {
          category.total = this.jns.length
          break
        }
        case 'wy': {
          category.total = this.wys.length
          break
        }
        case 'wp': {
          category.total = this.wps.length
          break
        }
        case 'zb': {
          category.total = this.zbs.length
          break
        }
        case 'mj': {
          category.total = this.mjs.length
          break
        }
        case 'ch': {
          category.total = this.chs.length
          break
        }

        default:
          break
      }

      const inClc = this.g.clc.find(item => item.key === category.key)
      if (inClc) {
        category.got = inClc.cards.length
      }

      if (!environment.production) {
        // category.got = category.total // for test
      }
    })
  }

  showCard(category: CardCategory) {
    this.isShowCard = true
    // console.log(category)
    switch (category.key) {
      case 'zj': {
        this.cards = this.zjs.map(zj => {
          return {
            id: zj.id,
            name: zj.name,
            desc: zj.desc,
            categoryKey: 'zj',
            got: false,
            pre: 'zj/zj-',
            img: zj.avatar,
          }
        })
        break
      }
      case 'rw': {
        this.cards = this.rws.map(rw => {
          return {
            id: rw.id,
            name: rw.name,
            desc: rw.desc,
            categoryKey: 'rw',
            got: false,
            pre: 'rw/rw-',
            img: rw.avatar,
          }
        })
        this.cards = this.cards.filter(card => card.id < 100)
        break
      }
      case 'jn': {
        this.cards = this.jns.map(jn => {
          return {
            id: jn.id,
            name: jn.name,
            desc: jn.desc,
            categoryKey: 'jn',
            got: false,
            pre: 'jn/jn-',
            img: jn.avatar,
          }
        })
        break
      }
      case 'wy': {
        this.cards = this.wys.map(wy => {
          return {
            id: wy.id,
            name: wy.name,
            desc: wy.desc,
            categoryKey: 'wy',
            got: false,
            pre: 'wy/wy-',
            img: wy.avatar,
          }
        })
        break
      }
      case 'wp': {
        this.cards = this.wps.map(wp => {
          return {
            id: wp.id,
            name: wp.name,
            desc: wp.desc,
            categoryKey: 'wp',
            got: false,
            pre: 'wp/wp-',
            img: wp.avatar,
          }
        })
        break
      }
      case 'zb': {
        this.cards = this.zbs.map(zb => {
          return {
            id: zb.id,
            name: zb.name,
            desc: zb.desc,
            categoryKey: 'zb',
            got: false,
            pre: 'zb/zb-',
            img: zb.avatar,
          }
        })
        break
      }
      case 'mj': {
        this.cards = this.mjs.map(mj => {
          return {
            id: mj.id,
            name: mj.name,
            desc: mj.desc,
            categoryKey: 'mj',
            got: false,
            pre: 'mj/mj-',
            img: mj.avatar,
            isBgWhite: mj.value === -1,
          }
        })
        break
      }
      case 'ch': {
        this.cards = this.chs.map(ch => {
          return {
            id: ch.id,
            name: ch.name,
            desc: ch.desc,
            categoryKey: 'ch',
            got: false,
            pre: 'ch/ch-',
            img: ch.avatar,
          }
        })
        break
      }

      default:
        break
    }

    const inClc = this.g.clc.find(item => item.key === category.key)
    if (inClc) {
      inClc.cards.forEach(card => {
        const inCards = this.cards.find(item => item.id === card.id)
        if (inCards) {
          inCards.got = true
        }
      })
    }

    if (!environment.production) {
      // this.cards.forEach(card => {
      //   card.got = true // for test
      // })
    }
  }

  selectCategory(category: CardCategory) {
    this.currentCategory = category
    this.showCard(category)
  }

  backToHome() {
    this.g.goToPage(PageEnum.Home)
  }

  back() {
    this.isShowCard = false
  }

  showCardDetail(card: CardItem) {
    if (card.got) {
      this.currentCard = clone(card)
      this.isShowCardDetail = true
    }
  }

  closeCardDetail() {
    this.isShowCardDetail = false
  }
}
