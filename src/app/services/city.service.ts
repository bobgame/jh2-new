import { Injectable } from '@angular/core'
import { GlobalService } from './global.service'
import { RwIdEnum } from '../constants/enums/rw.enum'
import { CityRwSpItem, CitySSItem } from '../constants/interfaces/city.interface'
import { cityRwSpMap } from '../pages/city/city-data'
import { rand, randInt, sampleItem } from '../units/Base'
import { PersonWy } from '../data/hero'

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private g: GlobalService) {}

  getSpRwItems(rwId: RwIdEnum) {
    const rwSps: CitySSItem[] = []
    const cityRw = this.g.getCityRwSp(rwId)
    if (cityRw.sps.length > 0) {
      cityRw.sps.forEach(item => {
        const canPush = [true]
        if (item.need.inSS) {
          canPush.push(this.g.current.cityGroup === item.need.inSS)
        }
        if (item.need.inCity) {
          canPush.push(this.g.current.city.id === item.need.inCity)
        }
        if (item.need.heart) {
          canPush.push(this.g.getRw(rwId).heart >= item.need.heart)
        }
        if (!canPush.includes(false)) {
          rwSps.push(cityRwSpMap[item.id])
        }
      })
    }
    return rwSps
  }

  getItemPrice(itemId: number, cateIn: 'wp' | 'zb') {
    if (cateIn === 'wp') {
      const wp = this.g.getWp(itemId)
      let wpPrice = Math.round((wp.price * this.g.current.city.spx) / 100) * 100
      const inSpp = this.g.current.city.spp.find(s => s.id === wp.id)
      if (inSpp) {
        wpPrice = inSpp.price
      }

      return this.calcFinalPrice(wpPrice)
    } else {
      const zb = this.g.getZb(itemId)
      const zbPrice = Math.round((zb.price * this.g.current.city.spx) / 100) * 100
      return this.calcFinalPrice(zbPrice)
    }
  }

  calcFinalPrice(price: number) {
    let resultPrice = price
    let swScaleAdd = Math.floor(this.g.hero.sw / 25) * 0.05
    if (swScaleAdd > 0.2) {
      swScaleAdd = 0.2
    } else if (swScaleAdd < -0.2) {
      swScaleAdd = -0.2
    }
    let syScale = 0
    if (this.g.hero.jn.sy > 0) {
      syScale = 0.1
    }
    if (this.g.itemData.type === 'buy') {
      resultPrice = resultPrice * (1 - swScaleAdd)
      resultPrice = resultPrice * (1 - syScale)
    } else if (this.g.itemData.type === 'sale') {
      resultPrice = resultPrice * (1 + swScaleAdd)
      resultPrice = resultPrice * (1 + syScale)
    }
    return Math.round(resultPrice / 100) * 100
  }

  getXWResult(isOneDay = false) {
    let result = false
    const max = isOneDay ? 0.034 : 0.35
    if (rand() < max) {
      result = true
      if (rand() > 0.9) {
        this.g.addWg(randInt(1, 3))
      } else {
        const addWyKey = sampleItem(Object.keys(this.g.hero.wy) as (keyof PersonWy)[])
        this.g.addWy(addWyKey as keyof PersonWy, 1)
      }
    }
    return result
  }
}
