import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'jh-ui-btn-close',
  imports: [],
  templateUrl: './ui-btn-close.component.html',
  styleUrl: './ui-btn-close.component.scss',
})
export class UiBtnCloseComponent {
  @Output() closeClicked = new EventEmitter<void>()

  clickClose() {
    this.closeClicked.emit()
  }
}
