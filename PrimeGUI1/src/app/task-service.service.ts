import { Injectable , OnInit} from '@angular/core';
import {Task} from './models/Task';
import Tasks from './task-component/dataTasks/Tasks.json';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasksLoaded : Task[]  = [];
  sum=0;
  inBasket=0;
  running=0;
  success=0;
  declined=0;

  getTask(){
   for(let i=0; Tasks.length>i; i++)
   {

    this.tasksLoaded.push(Tasks[i])
    
    if(Tasks[i].status=='waiting for restocks(ATC...)' || Tasks[i].status=='adding to cart...' || Tasks[i].status=='getting sizes' || Tasks[i].status=='waiting for release...'){
  this.running++;

    }else if(Tasks[i].status=='processing' ||  Tasks[i].status=='submitting order' || Tasks[i].status=='submitting shipping' || Tasks[i].status=='submitting billing' || Tasks[i].status==''){
      this.inBasket++;

    }else if(Tasks[i].status=='unexpected error' || Tasks[i].status=='payment declined'){
      this.declined++;

    }else if(Tasks[i].status=='succesfully checked out'){
     this.success++;
     console.log("success!")

    }
   }
  }

  constructor() { }

}
