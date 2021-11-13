import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomShow'
})
export class RandomShowPipe implements PipeTransform {

  transform(value: any[], amountToShow: any = 0): any {
    if (!value || !Array.isArray(value) || !amountToShow) return value;
    let slicedArr = [...value], amountToRemove = value.length - amountToShow;
    while(amountToRemove--) {
      let idx = Math.floor(Math.random() * (slicedArr.length));
      slicedArr.splice(idx, 1);
    }
    return slicedArr;
  }
}