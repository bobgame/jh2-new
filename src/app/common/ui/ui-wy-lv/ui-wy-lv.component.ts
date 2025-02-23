import { CommonModule } from '@angular/common'
import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { getWyLv } from '../../../units/Base'

@Component({
    selector: 'jh-ui-wy-lv',
    imports: [CommonModule],
    templateUrl: './ui-wy-lv.component.html',
    styleUrl: './ui-wy-lv.component.scss'
})
export class UiWyLvComponent implements OnInit, OnChanges {
  /** lv should be 0 1 2 3 */
  @Input() lv = 0

  lvItemsActive: number[] = []
  lvItemsNormal: number[] = []

  ngOnInit(): void {
    const lv = getWyLv(this.lv)
    this.lvItemsActive = Array(lv).fill(1)
    this.lvItemsNormal = Array(3 - lv).fill(1)
  }

  ngOnChanges(): void {
    this.ngOnInit()
  }
}
