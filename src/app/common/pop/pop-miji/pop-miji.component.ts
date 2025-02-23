import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GlobalService } from '../../../services/global.service'
import { UiBtnCloseComponent } from '../../ui/ui-btn-close/ui-btn-close.component'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { IntPipe } from '../../../pipes/int.pipe'

@Component({
    selector: 'jh-pop-miji',
    imports: [CommonModule, UiBtnCloseComponent, NgScrollbarModule, IntPipe],
    templateUrl: './pop-miji.component.html',
    styleUrl: './pop-miji.component.scss'
})
export class PopMijiComponent implements OnInit {
  constructor(public g: GlobalService) {}

  @Output() closePop = new EventEmitter()

  emptyItems = new Array(42).fill(0)

  items: PopMjItem[] = []

  currentItem: PopMjItem | undefined = undefined

  ngOnInit(): void {
    // this.addTestItems()
    this.init()
  }

  // addTestItems() {
  //   this.g.mjs.forEach(wp => {
  //     this.g.addMj(wp.id)
  //   })
  // }

  init() {
    this.items = []
    this.currentItem = undefined
    this.g.hero.mjs.forEach(mj => {
      const mjItem = this.g.mjs.find(item => item.id === mj)
      if (mjItem) {
        this.items.push({
          id: mjItem.id,
          name: mjItem.name,
          desc: mjItem.desc,
          avatar: mjItem.avatar,
        })
      }
    })
    if (this.items.length > 0) {
      this.currentItem = this.items[0]
    }
  }

  selectItem(item: PopMjItem) {
    this.currentItem = item
  }

  close() {
    this.g.show.pop.miJi = false
  }
}

interface PopMjItem {
  id: number
  name: string
  desc: string
  avatar: string
}
