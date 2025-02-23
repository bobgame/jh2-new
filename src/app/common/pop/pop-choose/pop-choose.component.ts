import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AnswerItem } from '../../../constants/interfaces/base.interface'
import { TaskAnswerItem } from '../../../data/tasks/task.interface'
import { TextColorPipe } from '../../../pipes/text-color.pipe'

@Component({
  selector: 'jh-pop-choose',
  standalone: true,
  imports: [CommonModule, TextColorPipe],
  templateUrl: './pop-choose.component.html',
  styleUrl: './pop-choose.component.scss',
})
export class PopChooseComponent {
  @Input() title = ''
  @Input() answers: AnswerItem[] = []
  @Output() itemClick = new EventEmitter<AnswerItem>()

  selectItem(item: AnswerItem, $event: MouseEvent) {
    this.itemClick.emit(item)
    $event.stopPropagation()
    $event.preventDefault()
  }
}
