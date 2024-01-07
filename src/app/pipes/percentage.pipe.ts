import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true
})
export class PercentagePipe implements PipeTransform {

  transform(value: any, totalMarks: number,decimalPlaces:number) {
    const percentage= value/ totalMarks * 100;

    return percentage.toFixed(decimalPlaces); 
  }

 


}
