import { Component, OnInit } from '@angular/core'
import { clone } from '../../units/Base'
import { MapCity, defaultMapCities } from '../../data/map'
import { CommonModule } from '@angular/common'
import { GlobalService } from '../../services/global.service'
import { PageEnum } from '../../constants/enums/base.enum'
import { MapService } from '../../services/map.service'
import { CityIdEnum } from '../../constants/enums/city.enum'

@Component({
    selector: 'jh-map',
    imports: [CommonModule],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  constructor(
    public g: GlobalService,
    public m: MapService,
  ) {}

  ngOnInit(): void {
    this.m.initMap()
  }

  selectCity(city: MapCity) {
    if (city.id === CityIdEnum.XiaoDao) {
      return
    }
    this.m.selectCity(city, {})
  }

  arrowClicked(isLeft: boolean) {
    this.m.arrowClicked(isLeft)
  }
}
