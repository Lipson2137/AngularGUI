import { Component, OnInit } from '@angular/core';
import {  faDiagramSuccessor, faEye, faEllipsis, faEyeSlash, faClone, faRotateLeft, faReceipt} from '@fortawesome/free-solid-svg-icons';
import invoices from './invoices.json';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-setting-component',
  templateUrl: './setting-component.component.html',
  styleUrls: ['./setting-component.component.css']
})
export class SettingComponentComponent implements OnInit {

  faDiagramSuccessor = faDiagramSuccessor;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faEllipsis = faEllipsis;
  faClone = faClone;
  faRotateLeft = faRotateLeft;
  faReceipt = faReceipt;

  idSettingTab = 3;
  key = "PRIME0B987654321";
  showKey = true;
  typeSubscription = "Renewal";
  subscriptionDate ="03/11/2022";
  priceRenewal=20;

  ivoicesTab:Invoice[] = [];

  selectedInvoice = invoices[0];

 changeTabId(arg1:number) {
    this.idSettingTab = arg1;
  }



  showKeyFun(){
    if(this.showKey==false){
      this.showKey = true;
    }else{
      this.showKey = false;
    }
  }

  onChange(newValue:Invoice) {
    console.log(newValue);
    this.selectedInvoice = newValue;
    // ... do other stuff here ...
}

  constructor() { }

  ngOnInit(): void {

    for(let i = 0; invoices.length>i; i++)
    {
      this.ivoicesTab.push(invoices[i])
      this.selectedInvoice = this.ivoicesTab[i];
    }
  
  }
  

}

function sendWebhook(){
  const whurl = "https://discord.com/api/webhooks/953211576993841162/WI_IbLTsy1MI2XBRhE1mbuWA-YODATXWdqFLcEA7QFC0gIVHoT2IZyHKVdM8-Msdw1fe";
  var msg = {
    "embeds": [{
      "title": "Webhook test",
      fields: [{
        name: "This is tests webhook",
        value: 'OK'
      }, {
        name: "Value",
        value: 2137
      }],
      "color": "10181046",
    }],
    "username": "PrimeAIO - checkouts",
    "avatar_url": "https://prime-aio.com/api/resources/discord/webhook/webhookAvatar512px.png"
  }

  fetch(whurl + "?wait=true",
    {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify(msg)
    })
}

