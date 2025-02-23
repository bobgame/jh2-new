import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SplitNamePipe } from '../../../pipes/split-name.pipe'

@Component({
    selector: 'jh-home-end',
    imports: [CommonModule, SplitNamePipe],
    templateUrl: './home-end.component.html',
    styleUrl: './home-end.component.scss'
})
export class HomeEndComponent implements OnInit {
  @Output() backHome = new EventEmitter()

  @Input() texts = ''

  textArr: { show: boolean; content: string }[] = []

  textTimer: number[] = new Array(20).fill(0)

  useTime = 0
  useTimer = 0
  isLoading = true

  ngOnInit(): void {
    this.useTime = 0
    const chunkSize = 10
    const textChunks = this.splitIntoChunks(this.texts, chunkSize)
    if (textChunks) {
      this.textArr = []
      for (let i = 0; i < textChunks.length; i++) {
        this.textArr.push({
          show: false,
          content: textChunks[i],
        })
      }
      for (let i = 0; i < this.textArr.length; i++) {
        this.textTimer[i] = window.setTimeout(
          () => {
            this.textArr[i].show = true
            // console.log(this.textArr)
          },
          i * 500 + 1000,
        )
      }
    }
    this.useTimer = window.setInterval(() => {
      this.useTime += 500
      if (this.useTime >= this.textArr.length * 500 + 1000) {
        this.isLoading = false
        clearInterval(this.useTimer)
      }
    }, 500)
  }

  splitIntoChunks(str: string, chunkSize: number) {
    // 切割文字，每 chunkSize 个字符切割一次，如果遇到逗号或者句号开头，就放到上一行去，这样就不会出现逗号句号开头的情况
    const strArr = str.split('')
    let tempStr = ''
    const result: string[] = []
    for (let i = 0; i < strArr.length; i++) {
      tempStr += strArr[i]
      if (tempStr.length === chunkSize || i === strArr.length - 1) {
        result.push(tempStr)
        tempStr = ''
      }
      if (tempStr.length === 1 && (strArr[i] === '，' || strArr[i] === '。') && result.length > 0) {
        result[result.length - 1] += strArr[i]
        tempStr = ''
      }
    }
    return result
  }

  updateEnd() {
    if (this.useTime <= this.textArr.length * 500 + 1000 && this.isLoading) {
      this.isLoading = false
      clearInterval(this.useTimer)
      this.textArr.forEach((t, i) => {
        clearTimeout(this.textTimer[i])
        t.show = true
      })
    } else if (!this.isLoading) {
      this.back()
    }
  }

  back() {
    this.backHome.emit()
  }
}
