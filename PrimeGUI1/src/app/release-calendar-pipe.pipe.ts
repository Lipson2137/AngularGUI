import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseCalendarPipe'
})
export class ReleaseCalendarPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    var newVal ="";

    if(value.length>30){
      if(value.includes("https://")){
       newVal = value.split("https://")[1];
      }else{
        newVal = value;
      }

      return newVal.substring(0,30)+"..."

    }else{
      return value
    }

  }

}
