import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import  Checkouts  from '../chart-component/dataCheckout/checkouts.json'
import { Checkout } from '../models/Checkout';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  closeResult = '';

  checkoutsTab : Checkout[] = [];
  
  constructor(private modalService: NgbModal) { 

    for(let i = 0;  Checkouts.length>i; i++){
      this.checkoutsTab.push(Checkouts[i]);
    }


  }

  ngOnInit(): void {
  }

  open(content: any) {
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
