import { Component } from '@angular/core';
import { faBarsProgress, faCoffee, faGear, faHome, faLink, faPerson, faSatelliteDish, faEnvelope, faUser, faCircleCheck,faXmarkCircle, faShoppingCart, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { TaskServiceService } from './task-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'PrimeGUI1';
  faCoffee = faCoffee;
  faGear = faGear;
  faSateliteDish = faSatelliteDish;
  linkHorizontal = faLink;
  faPerson = faPerson;
  faBars = faBarsProgress;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faCircleCheck = faCircleCheck;
  faXmarkCircle= faXmarkCircle;
  faShoppingCart = faShoppingCart;
  faSpinner = faSpinner;

  sum=0;
  inBasket=0;
  running=0;
  success=0;
  declined=0;


  constructor(private taskService:TaskServiceService){

  }

  ngOnInit(){
    this.taskService.getTask();
    this.sum=this.taskService.sum;
    this.inBasket = this.taskService.inBasket;
    this.running = this.taskService.running;
    this.success = this.taskService.success;
    this.declined = this.taskService.declined;

  }



}
