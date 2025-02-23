import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'jh-ui-progress-one',
  imports: [CommonModule],
  templateUrl: './ui-progress-one.component.html',
  styleUrl: './ui-progress-one.component.scss',
})
export class UiProgressOneComponent {
  @Input() value = 0
  @Input() hasAnim = true
}
