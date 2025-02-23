import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cnNum',
  standalone: true,
})
export class CnNumPipe implements PipeTransform {
  transform(value: number): string {
    const cnNum = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    return cnNum[value] || ''
  }
}
