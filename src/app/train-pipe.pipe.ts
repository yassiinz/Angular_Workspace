import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trainPipe'
})
export class TrainPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return '€' + value.toFixed(2);
  }

}
