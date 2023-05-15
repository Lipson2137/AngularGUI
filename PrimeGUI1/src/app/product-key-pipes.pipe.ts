import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productKeyPipes'
})
export class ProductKeyPipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substring(0,5);
  }

}
