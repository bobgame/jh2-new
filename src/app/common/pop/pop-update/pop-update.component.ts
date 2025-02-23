import { Component } from '@angular/core'
import { environment } from '../../../../environments/environment'
import packageJson from '../../../../../package.json'
import { UpdateService } from '../../../services/update.service'
import { CommonModule } from '@angular/common'
import { GlobalService } from '../../../services/global.service'

declare let cordova: any

@Component({
    selector: 'jh-pop-update',
    imports: [CommonModule],
    templateUrl: './pop-update.component.html',
    styleUrl: './pop-update.component.scss'
})
export class PopUpdateComponent {
  currentVersion = packageJson.version
  constructor(
    public u: UpdateService,
    private g: GlobalService,
  ) {}

  update() {
    const url = this.u.upData.u || 'http://jh2.llbnew.com'
    try {
      cordova.InAppBrowser.open(url, '_system', 'location=yes')
    } catch (error) {
      window.open(url, '_system')
    }
    this.g.show.pop.up = false
  }

  close() {
    this.g.show.pop.up = false
  }
}
