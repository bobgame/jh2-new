import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ClipboardModule, ClipboardService } from 'ngx-clipboard'
import { UiBtnBackComponent } from '../../common/ui/ui-btn-back/ui-btn-back.component'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { NgScrollbarModule } from 'ngx-scrollbar'

@Component({
  selector: 'jh-help',
  imports: [CommonModule, ClipboardModule, UiBtnBackComponent, NgScrollbarModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {
  constructor(
    private g: GlobalService,
    private clipboardService: ClipboardService,
  ) {}

  back() {
    this.g.goToPage(PageEnum.Home)
  }

  copyQQ() {
    this.clipboardService.copy('701030167')
    // console.log('已复制到剪贴板')
  }
}
