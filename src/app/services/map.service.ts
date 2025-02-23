import { Injectable } from '@angular/core'
import { GlobalService } from './global.service'
import { CityGroupEnum, PageEnum } from '../constants/enums/base.enum'
import { CityIdEnum } from '../constants/enums/city.enum'
import { MapCity, defaultMapCities } from '../data/map'
import { clone } from '../units/Base'
import { cityMoves } from '../data/city-move'
import { SelectCityItem } from '../constants/interfaces/city.interface'

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private g: GlobalService) {}

  mapCities = clone(defaultMapCities)
  currentCity = this.mapCities[0]
  isSelecting = false

  isShowLeftSide = false
  mapDragLeft = 0

  mapMask = false
  mapToast = {
    show: false,
    text: '',
  }

  initMap() {
    this.currentCity = this.mapCities.find(city => city.id === this.g.current.city.id) || this.mapCities[0]

    this.arrowClicked(this.currentCity.left <= 300)
  }

  calcMovePrice(fromId: CityIdEnum, toId: CityIdEnum) {
    const cityMove = cityMoves.find(move => move.cities.includes(fromId) && move.cities.includes(toId)) || cityMoves[0]
    const price = cityMove.cost
    return price
  }

  moveToMap(mapId: CityIdEnum, item: SelectCityItem) {
    this.mapMask = true
    this.mapToast.show = true
    this.g.show.mapPosFlash = true
    const thisMap = this.mapCities.find(city => city.id === mapId) || this.mapCities[0]
    this.mapToast.text = '前往' + thisMap.name + '.'
    setTimeout(() => {
      this.mapToast.text += '.'
      setTimeout(() => {
        this.mapToast.text += '.'
      }, 500)
    }, 500)

    this.g.current.prePage = this.g.current.page
    this.g.current.page = PageEnum.Map

    setTimeout(() => {
      this.selectCity(thisMap, item)
      this.mapToast.show = false
      this.g.show.mapPosFlash = true
      if (!item.isLHXS) {
        setTimeout(() => {
          this.selectCity(thisMap, item)
          this.mapMask = false
        }, 1000)
      }
    }, 2000)
  }

  selectCity(city: MapCity, item: SelectCityItem) {
    const { isCH, isBJ, notEnterCity, isLHXS } = item
    if (!this.isSelecting && city.id === this.currentCity.id) {
      if (this.currentCity.id !== this.g.current.city.id) {
        let cost = this.calcMovePrice(this.g.current.city.id, city.id)
        const qgMinus = 0.03 * this.g.hero.wy.qg
        const horseMinus = 0.003 * this.g.hero.equip.horse.value
        cost = Math.floor((cost * (1 - qgMinus - horseMinus)) / 10) * 10
        if (cost < 500) {
          cost = 500
        }
        this.g.useJq(cost)
        const moveHH = Math.floor(cost / 150)
        this.g.addTimeHH(moveHH)
      }
      this.g.current.city = this.g.getCity(city.id)
      if (isCH) {
        this.g.current.cityGroup = this.g.current.city.id === CityIdEnum.HangZhou ? CityGroupEnum.HangZhouMaTou : CityGroupEnum.XiaoDaoMaTou
      } else if (isBJ || isLHXS) {
        this.g.current.cityGroup = CityGroupEnum.MinJia
      } else {
        this.g.current.cityGroup = CityGroupEnum.Normal
      }
      if (!notEnterCity) {
        this.g.goToPage(PageEnum.City)
      }
    } else {
      this.currentCity = city
      this.isSelecting = true
      this.arrowClicked(this.currentCity.left <= 300)
      setTimeout(() => {
        this.isSelecting = false
      }, 300)
    }
  }

  arrowClicked(isLeft: boolean) {
    this.isShowLeftSide = !isLeft
    this.mapDragLeft = isLeft ? 0 : -172
    // console.log(this.mapDragLeft)
  }
}
