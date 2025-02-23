import { Component, Input } from '@angular/core'
import { GlobalService } from '../../../services/global.service'
import { PageEnum } from '../../../constants/enums/base.enum'

@Component({
  selector: 'jh-home-fan',
  imports: [],
  templateUrl: './home-fan.component.html',
  styleUrl: './home-fan.component.scss',
})
export class HomeFanComponent {
  @Input() fanIn = false

  constructor(public g: GlobalService) {}

  PageEnum = PageEnum

  startNewGame() {
    this.g.goToPage(PageEnum.ChooseHero)
  }

  continue() {
    this.g.show.pop.sl = true
  }

  openCardsPage() {
    this.g.goToPage(PageEnum.Cards)
  }

  openHelpPage() {
    this.g.goToPage(PageEnum.Help)
  }

  openSettingsPage() {
    this.g.goToPage(PageEnum.Settings)
  }

  exit() {
    this.g.goToPage(PageEnum.Home)
  }
}
