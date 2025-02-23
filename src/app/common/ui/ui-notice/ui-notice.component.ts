import { Component, Input } from '@angular/core'
import { NoticeData } from '../../../constants/interfaces/base.interface'

@Component({
  selector: 'jh-ui-notice',
  imports: [],
  templateUrl: './ui-notice.component.html',
  styleUrl: './ui-notice.component.scss',
})
export class UiNoticeComponent {
  @Input() data: NoticeData = {
    show: false,
    content: '',
  }
}
