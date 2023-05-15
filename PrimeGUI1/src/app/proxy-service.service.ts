import { Injectable } from '@angular/core';
import proxyData from './proxy-component/proxyData/proxyData.json'

@Injectable({
  providedIn: 'root'
})
export class ProxyServiceService {

  proxyGroupNames:string[] = [];


  constructor() { 

    for(let i = 0; proxyData.length>i; i++){
      if(this.proxyGroupNames.length>0){
      for(let j = 0; this.proxyGroupNames.length>j ; j++){
        if(proxyData[i].proxyGroup==this.proxyGroupNames[j]){
          break;
        }
        if(this.proxyGroupNames.length==j+1){
          this.proxyGroupNames.push(proxyData[i].proxyGroup)
          console.log(this.proxyGroupNames);
        }
      }
    }else{
      this.proxyGroupNames.push(proxyData[i].proxyGroup)
    }
    }
  }
}
