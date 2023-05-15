import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentCardBlurPipe'
})
export class PaymentCardBlurPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.substring(12,16);
  }

}
