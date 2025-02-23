import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { clone, getWyLv, sampleItem } from '../../../units/Base'
import { UiWyLvComponent } from '../../../common/ui/ui-wy-lv/ui-wy-lv.component'
import { PersonJn, PersonWy } from '../../../data/hero'

@Component({
    selector: 'jh-zb',
    imports: [CommonModule, UiWyLvComponent],
    templateUrl: './zb.component.html',
    styleUrl: './zb.component.scss'
})
export class ZBComponent implements OnInit {
  constructor(public g: GlobalService) {}

  wyItems: WyItem[] = [
    { key: 'ng', name: '内功', type: 'lv', value: 0 },
    { key: 'qg', name: '轻功', type: 'lv', value: 0 },
    { key: 'jf', name: '剑法', type: 'lv', value: 0 },
    { key: 'gf', name: '棍法', type: 'lv', value: 0 },
    { key: 'zf', name: '掌法', type: 'lv', value: 0 },
    { key: 'aq', name: '暗器', type: 'lv', value: 0 },
  ]

  jnItems: JnItem[] = [
    { key: 'tq', img: 'tq', name: '偷窃', active: false },
    { key: 'yr', img: 'yr', name: '易容', active: false },
    { key: 'zc', img: 'zc', name: '侦察', active: false },
    { key: 'dl', img: 'dl', name: '打猎', active: false },
    { key: 'xb', img: 'xb', name: '寻宝', active: false },
    { key: 'fq', img: 'fq', name: '抚琴', active: false },
    { key: 'sy', img: 'sy', name: '商业', active: false },
    { key: 'yl', img: 'yl', name: '医疗', active: false },
  ]

  selectedJnItem = {
    key: '',
    name: '',
  }

  ngOnInit() {
    this.init()
  }

  init() {
    this.setWyItems(this.g.hero.wy, this.g.hero.wg, this.g.hero.sw)
    this.setJnItems(this.g.hero.jn)
  }

  setWyItems(wy: PersonWy, wg: number, sw: number) {
    this.wyItems.forEach(item => {
      if (item.key === 'wg') {
        item.value = wg
      } else if (item.key === 'sw') {
        item.value = sw
      } else {
        item.value = wy[item.key as keyof PersonWy]
      }
    })
  }

  changeWyLv(item: WyItem) {
    const lv = getWyLv(item.value) + 1
    let value = 0
    // console.log(lv)

    if (lv > 3) {
      item.value = 0
      this.g.hero.wy[item.key as keyof PersonWy] = 0
    } else if (lv === 3) {
      value = 9
    } else if (lv === 2) {
      value = 5
    } else if (lv === 1) {
      value = 2
    }
    // console.log(value)

    item.value = value
    this.g.hero.wy[item.key as keyof PersonWy] = value
  }

  setJnItems(jn: PersonJn) {
    this.jnItems.forEach(item => {
      item.active = jn[item.key as keyof PersonJn] > 0
      // item.active = rand() > 0.5 ? false : true // for test
      if (item.active && this.selectedJnItem.key === '') {
        this.selectedJnItem.key = item.key
        this.selectedJnItem.name = item.name
      }
    })
  }

  selectJnItem(item: JnItem) {
    this.selectedJnItem.key = item.key
    this.selectedJnItem.name = item.name
    if (item.active) {
      this.g.hero.jn[item.key as keyof PersonJn] = 0
    } else {
      this.g.hero.jn[item.key as keyof PersonJn] = 1
    }
    item.active = !item.active
  }
}

interface WyItem {
  key: string
  name: string
  type: 'num' | 'lv'
  value: number
}
interface JnItem {
  key: string
  img: string
  name: string
  active: boolean
}
