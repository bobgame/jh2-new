import { Pipe, PipeTransform } from '@angular/core'
import { JhTime } from '../constants/interfaces/base.interface'
import { getJhTime } from '../units/time'

@Pipe({
  name: 'showTime',
  standalone: true,
})
export class ShowTimePipe implements PipeTransform {
  transform(value: JhTime): string {
    return getJhTime(value)
  }
}
