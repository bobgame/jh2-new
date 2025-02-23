import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'jh-ui-progress',
    imports: [CommonModule],
    templateUrl: './ui-progress.component.html',
    styleUrl: './ui-progress.component.scss'
})
export class UiProgressComponent {
  @Input() value = 0
  @Input() hasAnim = true
}
