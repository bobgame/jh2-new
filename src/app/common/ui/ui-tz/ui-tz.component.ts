import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { clone } from '../../../units/Base'

@Component({
  selector: 'jh-ui-tz',
  standalone: true,
  imports: [],
  templateUrl: './ui-tz.component.html',
  styleUrl: './ui-tz.component.scss',
})
export class UiTzComponent implements OnChanges {
  @Input() tzData = {
    id: 0,
    num: 1,
  }
  show = { num: 1 }
  baseNumArr = [1, 2, 3, 4, 5, 6]
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tzData'] && this.tzData.id > 0) {
      let count = 0
      const animArr = clone(this.baseNumArr)
        .filter(b => b !== this.tzData.num)
        .sort(() => Math.random() - 0.5)
      animArr.push(this.tzData.num)
      // console.log(animArr)
      const animTimer = setInterval(() => {
        this.show.num = animArr[count]
        count++
        if (count > 5) {
          clearInterval(animTimer)
        }
      }, 60)
    }
  }
}
