import { Pipe, PipeTransform } from '@angular/core'
import { replaceTalk } from '../units/Base'

@Pipe({
  name: 'textColor',
  standalone: true,
})
export class TextColorPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length > 0) {
      value = replaceTalk(value, {})
    }
    return value
  }
}
