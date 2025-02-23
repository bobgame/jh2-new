import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiBtnCloseComponent } from '../ui-btn-close/ui-btn-close.component'

@Component({
    selector: 'jh-ui-frame',
    imports: [CommonModule, UiBtnCloseComponent],
    templateUrl: './ui-frame.component.html',
    styleUrl: './ui-frame.component.scss'
})
export class UiFrameComponent {
  @Input() pageTitle = ''
  @Input() showClose = false
  @Output() closeFrame = new EventEmitter()

  close() {
    this.closeFrame.emit()
  }
}
