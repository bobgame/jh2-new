import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ClipboardModule, ClipboardService } from 'ngx-clipboard'
import { UiBtnBackComponent } from '../../common/ui/ui-btn-back/ui-btn-back.component'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { SettingBgEnum, SettingEnum } from '../../data/settings.enum'
import { settingsBgItems } from '../../data/settings'
import { SettingsService } from '../../services/settings.service'

@Component({
    selector: 'jh-settings',
    imports: [CommonModule, ClipboardModule, UiBtnBackComponent, NgScrollbarModule],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  constructor(
    private g: GlobalService,
    private clipboardService: ClipboardService,
    private s: SettingsService,
  ) {}
  SettingBgEnum = SettingBgEnum
  allBgItems = settingsBgItems
  stData = {
    bg: SettingBgEnum.Gray,
    textShadow: 0,
  }

  ngOnInit(): void {
    this.stData.bg = this.g.getSetting(SettingEnum.Bg).value
    this.stData.textShadow = this.g.getSetting(SettingEnum.textShadowEndUse).value
  }

  back() {
    this.g.goToPage(PageEnum.Home)
  }

  setBg(bgId: SettingBgEnum) {
    this.stData.bg = bgId
    this.s.setGameBg(this.stData.bg)
    this.g.getSetting(SettingEnum.Bg).value = bgId
    this.g.saveHis()
  }

  setTextShadow(value: number) {
    this.stData.textShadow = value
    this.s.setTextShadow(value)
    this.g.getSetting(SettingEnum.textShadowEndUse).value = value
    this.g.saveHis()
  }
}
