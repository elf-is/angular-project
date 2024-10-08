import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[args[1]] === args[0]) {
        resultArray.push(item);
      }
    }
    console.log(resultArray);

    return resultArray;
  }
}
