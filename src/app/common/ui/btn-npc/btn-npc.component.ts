import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { SplitNamePipe } from '../../../pipes/split-name.pipe'

@Component({
  selector: 'jh-btn-npc',
  imports: [CommonModule, SplitNamePipe],
  templateUrl: './btn-npc.component.html',
  styleUrl: './btn-npc.component.scss',
})
export class BtnNpcComponent {
  @Input() name = ''
}
