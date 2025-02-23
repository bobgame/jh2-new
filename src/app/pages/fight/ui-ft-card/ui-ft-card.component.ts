import { CommonModule } from '@angular/common'
import { Component, Input, input } from '@angular/core'
import { CnNumPipe } from '../../../pipes/cn-num.pipe'
import { MjNamePipe } from '../../../pipes/mj-name.pipe'

@Component({
  selector: 'jh-ui-ft-card',
  imports: [CommonModule, CnNumPipe, MjNamePipe],
  templateUrl: './ui-ft-card.component.html',
  styleUrl: './ui-ft-card.component.scss',
})
export class UiFtCardComponent {
  @Input() cardId = 1
  @Input() cardIndex = 0
  @Input() isSelected = false
  @Input() ftImg = '3'
  @Input() mjNamePos: 'top' | 'bottom' = 'top'
}
