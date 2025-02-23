import { Pipe, PipeTransform } from '@angular/core'
import { CityGroupEnum } from '../constants/enums/base.enum'
import { cityGroupNames } from '../pages/city/city-data'

@Pipe({
  name: 'cityName',
  standalone: true,
})
export class CityNamePipe implements PipeTransform {
  transform(cityName: string, cityGroup: CityGroupEnum): string {
    if (cityGroup === CityGroupEnum.Normal) {
      return cityName
    } else {
      return cityGroupNames[cityGroup] || ''
    }
  }
}
