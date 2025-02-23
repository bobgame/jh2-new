import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'int',
  standalone: true,
})
export class IntPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value)
  }
}
