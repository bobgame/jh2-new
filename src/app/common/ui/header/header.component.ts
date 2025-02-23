import { Component, EventEmitter, Output } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { CommonModule } from '@angular/common'
import { ShowTimePipe } from '../../../pipes/show-time.pipe'
import { IntPipe } from '../../../pipes/int.pipe'

@Component({
  selector: 'jh-header',
  standalone: true,
  imports: [CommonModule, ShowTimePipe, IntPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public g: GlobalService) {}

  @Output() avatarClick = new EventEmitter<void>()

  clickAvatar() {
    this.avatarClick.emit()
  }
}
