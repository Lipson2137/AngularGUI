import { Component, OnInit } from '@angular/core';
import { faLink , faClone, faBolt} from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  selector: 'app-calendar-component',
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css']
})




export class CalendarComponentComponent implements OnInit {

  closeResult = '';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  
faLink = faLink;
faClone = faClone;
faBolt = faBolt;

releases = [
  {
    productName: "Jordan 1 High OG ",
    link:"https://sneakersjoint.com/produkt/air-jordan-1-retro-high-og-university-blue/",
    image:"https://www.theillest.pl/wp-content/uploads/2022/10/Air-Jordan-1-High-Lost-and-Found-DZ5485-612-3.jpeg",
    releaseDate:"20.08.2022"
},{
  productName: "Yeezy Boost 350",
  link:"https://dopestore.pl/pl/p/YEEZY-Boost-350-v2-BELUGA-2.0-Buty-/569",
  image:"https://dopestore.pl/userdata/public/gfx/7b14a20339b1e9c66f18c1516512140d.jpg",
  releaseDate:"01.01.2000"
}
]


  constructor(private modalService: NgbModal) { }



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
