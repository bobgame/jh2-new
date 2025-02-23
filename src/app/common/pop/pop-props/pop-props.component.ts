import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { clone, rand } from '../../../units/Base'
import { PersonJn, PersonWy } from '../../../data/hero'
import { UiAvatarComponent } from '../../ui/ui-avatar/ui-avatar.component'
import { UiWyLvComponent } from '../../ui/ui-wy-lv/ui-wy-lv.component'
import { UiBtnCloseComponent } from '../../ui/ui-btn-close/ui-btn-close.component'
import { GlobalService } from '../../../services/global.service'
import { defaultRws } from '../../../data/rw'
import { HeartPipe } from '../../../pipes/heart.pipe'

@Component({
  selector: 'jh-pop-props',
  imports: [CommonModule, UiAvatarComponent, UiWyLvComponent, UiBtnCloseComponent, HeartPipe],
  templateUrl: './pop-props.component.html',
  styleUrl: './pop-props.component.scss',
})
export class PopPropsComponent implements OnInit {
  constructor(public g: GlobalService) {}
  @Input() showType: 'zj' | 'rw' = 'zj'
  @Input() npc = clone(defaultRws[0])

  @Output() closePop = new EventEmitter<void>()

  props = {
    name: '吴茗',
    desc: '吴茗',
    avatar: 'wuming',
    rwId: 1,
    heart: 0,
    jn: {
      tq: 0,
      yr: 0,
      zc: 0,
      dl: 0,
      xb: 0,
      fq: 0,
      sy: 0,
      yl: 0,
    },
  }

  wyItems: WyItem[] = [
    { key: 'wg', name: '武功', type: 'num', value: 0 },
    { key: 'sw', name: '声望', type: 'num', value: 0 },
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
    if (this.showType === 'zj') {
      this.props.name = this.g.hero.name
      this.props.desc = this.g.hero.desc
      this.props.avatar = this.g.hero.avatar
      this.props.rwId = this.g.hero.id
      this.props.heart = 0
      this.setWyItems(this.g.hero.wy, this.g.hero.wg, this.g.hero.sw)
      this.setJnItems(this.g.hero.jn)
    } else {
      this.props.name = this.npc.name
      this.props.desc = this.npc.desc
      this.props.avatar = this.npc.avatar
      this.props.rwId = this.npc.id
      this.props.heart = this.npc.heart
      this.setWyItems(this.npc.wy, this.npc.wg, this.npc.sw)
      this.setJnItems(this.npc.jn)
    }
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
    if (item.active) {
      this.selectedJnItem.key = item.key
      this.selectedJnItem.name = item.name
    }
  }

  close() {
    this.closePop.emit()
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
