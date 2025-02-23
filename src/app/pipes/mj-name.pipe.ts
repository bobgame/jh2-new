import { Pipe, PipeTransform } from '@angular/core'
import { defaultMjs } from '../data/mj'

@Pipe({
  name: 'mjName',
  standalone: true,
})
export class MjNamePipe implements PipeTransform {
  transform(value: number): string {
    return defaultMjs.find(mj => mj.id === value)?.name || ''
  }
}
