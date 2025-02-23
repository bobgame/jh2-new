import { Component } from '@angular/core'
import { JhToastService } from '../../../services/jh-toast.service'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'jh-ui-toast',
    imports: [CommonModule],
    templateUrl: './ui-toast.component.html',
    styleUrl: './ui-toast.component.scss'
})
export class UiToastComponent {
  constructor(public jt: JhToastService) {}

  toastClicked() {
    this.jt.closeToast()
  }
}
