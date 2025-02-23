import { Pipe, PipeTransform } from '@angular/core'
import { getTransHeart } from '../units/Base'

@Pipe({
  name: 'heart',
  standalone: true,
})
export class HeartPipe implements PipeTransform {
  transform(value: number): number {
    return getTransHeart(value)
  }
}
