import { Directive, HostListener, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[jh2LongPress]',
  standalone: true,
})
export class LongPressDirective {
  private timeout = 0
  private interval = 0

  @Output() longPress = new EventEmitter()

  @HostListener('mousedown') onMouseDown() {
    this.startPress()
  }

  @HostListener('mouseup') onMouseUp() {
    this.stopPress()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.stopPress()
  }

  private startPress() {
    this.timeout = window.setTimeout(() => {
      this.interval = window.setInterval(() => {
        this.longPress.emit()
      }, 50)
    }, 1000) // 1 second
  }

  private stopPress() {
    clearTimeout(this.timeout)
    clearInterval(this.interval)
  }
}
