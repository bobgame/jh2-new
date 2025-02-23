import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'jh-ui-btn-back',
  standalone: true,
  imports: [],
  templateUrl: './ui-btn-back.component.html',
  styleUrl: './ui-btn-back.component.scss',
})
export class UiBtnBackComponent {
  @Output() backClicked = new EventEmitter<void>()

  backClose() {
    this.backClicked.emit()
  }
}
