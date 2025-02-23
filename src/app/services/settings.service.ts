import { Injectable } from '@angular/core'
import { GlobalService } from './global.service'
import { settingsBgItems } from '../data/settings'
import { SettingBgEnum, SettingEnum } from '../data/settings.enum'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private g: GlobalService) {}

  stData = {
    textShadow: true,
  }

  initSettings() {
    this.setGameBg(this.g.getSetting(SettingEnum.Bg).value)
    const oldTextShadow = this.g.getSetting(SettingEnum.textShadow).value
    const newTextShadow = this.g.getSetting(SettingEnum.textShadowEndUse).value
    let textShadow = 0
    if (newTextShadow > 0) {
      textShadow = newTextShadow
    } else if (oldTextShadow > 0) {
      textShadow = 0
      this.g.getSetting(SettingEnum.textShadow).value = 0
      this.g.saveHis()
    }
    this.setTextShadow(textShadow)
  }
  setGameBg(bgId: SettingBgEnum) {
    const bgItem = settingsBgItems.find(x => x.id === bgId)
    const body = document.querySelector('body')
    if (body && bgItem) {
      body.style.backgroundColor = bgItem.bgColor
      body.style.background = bgItem.bg
    }
  }
  setTextShadow(value: number) {
    this.stData.textShadow = value === 1
  }
}
