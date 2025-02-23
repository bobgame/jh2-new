import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'splitName',
  standalone: true,
})
export class SplitNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length > 0) {
      const chars = value.split('')
      let result = ''
      chars.forEach(char => {
        result += `<span>${char}</span>`
      })
      return result
    }
    return '<span></span>'
  }
}
