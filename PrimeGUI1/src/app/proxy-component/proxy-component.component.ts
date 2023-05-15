import { Component, OnInit } from '@angular/core';
import { ProxyGroup} from '../models/ProxyGroup';
import { Proxy} from '../models/Proxy';
import Proxies from  './proxyData/proxyData.json'
import{ faVial, faTrash, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proxy-component',
  templateUrl: './proxy-component.component.html',
  styleUrls: ['./proxy-component.component.css']
})
export class ProxyComponentComponent implements OnInit {

  faVial = faVial;
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;
  closeResult = '';

  proxyGroups:ProxyGroup[] = [];
  idSite=''

  textProxyInput:string = ""

  change(id:string){
    this.idSite = id;
    console.log(this.idSite);
    }


    convertAdresInput(inputAdres:string){

    for(let i = 0; inputAdres.split(" ").length>i; i++){


      console.log(inputAdres.split(" ")[i].split(":")[0])
      console.log(inputAdres.split(" ")[i].split(":")[1])
      console.log(inputAdres.split(" ")[i].split(":")[2])
      console.log(inputAdres.split(" ")[i].split(":")[3])

    this.addProxyToGroup(new Proxy(inputAdres.split(" ")[i].split(":")[0],inputAdres.split(" ")[i].split(":")[2],inputAdres.split(" ")[i].split(":")[3],parseInt(inputAdres.split(" ")[i].split(":")[1]),this.idSite))


    }
    }


    addProxyToGroup(proxy:Proxy)
    {

      for(let i = 0; this.proxyGroups.length>i; i++)
      {
        if(this.proxyGroups[i].name==proxy.proxyGroup){
          this.proxyGroups[i].proxyObjects.push(proxy);
          console.log("pushed proxy to group!")
        }
      }

    }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    this.proxyGroups.push(new ProxyGroup("ByteResi"));
    this.proxyGroups.push(new ProxyGroup("MyResi"));

    for(let i=0; Proxies.length>i; i++)
    {
      if(this.idSite==''){
        this.idSite = Proxies[i].proxyGroup;
      }
      this.addProxyToGroup(Proxies[i]);
    }

  }

  open(content: any ,  ) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
