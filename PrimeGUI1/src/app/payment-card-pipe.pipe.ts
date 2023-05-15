import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentCardPipe'
})
export class PaymentCardPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.substring(0,4)=="4165"){
      return "assets/mastercardLogo.png"
    
    }else{
      return "assets/visaLogo2.png"
    }



  }

}
