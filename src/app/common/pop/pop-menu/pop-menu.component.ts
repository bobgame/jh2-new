import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { PageEnum } from '../../../constants/enums/base.enum'

@Component({
  selector: 'jh-pop-menu',
  imports: [CommonModule],
  templateUrl: './pop-menu.component.html',
  styleUrl: './pop-menu.component.scss',
})
export class PopMenuComponent {
  constructor(private g: GlobalService) {}

  @Output() closePop = new EventEmitter<void>()
  @Output() openPropsPop = new EventEmitter<void>()

  close() {
    this.closePop.emit()
  }

  continue() {
    this.close()
  }

  seeProps() {
    this.openPropsPop.emit()
    this.close()
  }

  seeBag() {
    this.g.itemData.type = 'hero'
    this.g.show.pop.items = true
    this.close()
  }

  seeBooks() {
    this.g.show.pop.miJi = true
    this.close()
  }

  saveGame() {
    this.g.show.pop.sl = true
    this.close()
  }

  backToMenu() {
    this.g.goToPage(PageEnum.Home)
    this.close()
  }
}
