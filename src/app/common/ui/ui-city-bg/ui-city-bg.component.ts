import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CityNamePipe } from '../../../pipes/city-name.pipe'
import { CityGroupEnum } from '../../../constants/enums/base.enum'
import { GlobalService } from '../../../services/global.service'
import { citySheShiImages } from '../../../pages/city/city-data'

@Component({
  selector: 'jh-ui-city-bg',
  standalone: true,
  imports: [CommonModule, CityNamePipe],
  templateUrl: './ui-city-bg.component.html',
  styleUrl: './ui-city-bg.component.scss',
})
export class UiCityBgComponent {
  constructor(public g: GlobalService) {}
  CityGroupEnum = CityGroupEnum
  citySheShiImages = citySheShiImages
}
