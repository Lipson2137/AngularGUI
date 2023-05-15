import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {     faCircleCheck, faMagnifyingGlass, faPlay, faPlus, faShoppingCart, faSpinner, faXmarkCircle, faLayerGroup, faX, faPause, faPlusCircle, faMinus, faPenToSquare, faTrash, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { taskGroup } from '../models/taskGroup';
import { Task} from '../models/Task';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Tasks from './dataTasks/Tasks.json';
import { ProxyServiceService} from '../proxy-service.service';



@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  closeResult = '';

  faX = faX;
  faLayerGroup =  faLayerGroup;
  faPLusLarge = faPlus;
  faShoppingCart = faShoppingCart;
  faSpinner = faSpinner;
  faCircleCheck = faCircleCheck;
  faXmarkCircle = faXmarkCircle;
  faMagnifyingGlass = faMagnifyingGlass;
  faPLay = faPlay;
  idSite="";
  isWenesday = true;
  faPause = faPause;
  faPlusCircle = faPlusCircle;
  faMinus = faMinus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faClock = faClockRotateLeft;

  newGroupName = "";
  nrOfTasks:number;

  enteredSearchTaskName: string = "";


  monitorDelayModal:number;
  retryDelayModal:number;
  timeoutModal:number;


  modalDelaysEvent(idSite:string){

    for(let i=0 ; this.taskGroups.length>i; i++){
      if(this.taskGroups[i].name==idSite){
      this.monitorDelayModal = this.taskGroups[i].monitorDelay;
      this.retryDelayModal = this.taskGroups[i].retryDelay;
      this.timeoutModal = this.taskGroups[i].timeout;
      }
    }
  }


@Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  inSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchTaskName);
  }
  checkIncludeTaskName(groupName:string){
    if(groupName.includes(this.enteredSearchTaskName.toLowerCase())){
      return true
    }else{
      return false;
    }
  }

  ///taskObjInputs
  siteTaskName="";
  profil="";
  sizes="";
  product="";
  status="";
  groupName="";
  proxyGroup="";
  paymentId="";
  monitorDelay=0;
  errorDelay=0;
  quantity=0;

 ////modal task obj////
 nameModalTask ="";
 profilModalTask ="";
 sizesModalTask ="";
 productModalTask ="";
 statusModalTask ="";
 groupNameModalTask ="";
 proxyGroupModalTask ="";
 paymentIdModalTask ="";
 monitorDelayModalTask=0;
 errorDelayModalTask = 0;

entireTaskObj:Task;


proxyGroupNames:string[] = this.proxyService.proxyGroupNames




  change(id:string, numberOfTasks:number){
  this.idSite = id;
  this.nrOfTasks = numberOfTasks;
  this.unSelectAll()
  }


  startSingleTask(task:Task){

    
    for(let i=0; this.taskGroups.length>i; i++){
      if(this.taskGroups[i].name==task.groupName){
       
        this.changeGroupTaskStatusTasks(task,"running")
        task.status = 'waiting for restocks(ATC...)';
        break;
      }
    }
  }



   tabChecked:boolean[] = [];
   isChecked = true;
   showAmountTask=false;

   checkIfSelected(){
    for(let i = 0; this.tabChecked.length>i; i++){
      if(this.tabChecked[i]){
        return "block";
      }
    }
    return "none"
   }

   unSelectAll(){
    for(let i = 0; this.tabChecked.length>i; i++){
      this.tabChecked[i] = false;
    }
   }

   selectedCount(){
    let countSelect = 0;
    for(let i = 0; this.tabChecked.length>i; i++){
      if(this.tabChecked[i]){
        countSelect++;
      }
    }
    return countSelect;
   }

  selectTaskChange(index:number){
    if(this.tabChecked[index]){
      this.tabChecked[index]= false;
    }else{
      this.tabChecked[index] = true;
    }

  }

  bgColorSingleTask(index:number){
    if(this.tabChecked[index]){
      return 'black';
    }else{
      return null
    }
  
  }

  stopSingleTask(task:Task){
  

    for(let i=0; this.taskGroups.length>i; i++){

      if (this.taskGroups[i].name == task.groupName && task.status == 'processing' || this.taskGroups[i].name == task.groupName && task.status == 'submitting order' || this.taskGroups[i].name == task.groupName && task.status == 'submitting shipping' || this.taskGroups[i].name == task.groupName && task.status == 'submitting billing') {
        console.log("eloelo")
        this.taskGroups[i].inBasket--;
        break;
      } else if (this.taskGroups[i].name == task.groupName && task.status == 'waiting for restocks(ATC...)' || this.taskGroups[i].name == task.groupName && task.status == 'adding to cart...' || this.taskGroups[i].name == task.groupName && task.status == 'getting sizes' || this.taskGroups[i].name == task.groupName && task.status == 'waiting for release...') {
        this.taskGroups[i].running--;
        break;
      }
    }
    task.status = 'stopped';

  }

  taskGroups:taskGroup[] = [];

  addGroup(group : taskGroup){
    this.taskGroups.push(group);
    return 0;
  }

  stopAllTasks(){

    for(let i=0; this.taskGroups.length>i; i++){
      for(let j=0; this.taskGroups[i].arrObjects.length>j; j++){
        this.taskGroups[i].arrObjects[j].status = 'stopped';
      }
    }

   }

   startAllTasks(){

  for(let i=0; this.taskGroups.length>i; i++){
      for(let j=0; this.taskGroups[i].arrObjects.length>j; j++)
      {
        if(this.taskGroups[i].arrObjects[j].status=='stopped' || this.taskGroups[i].arrObjects[j].status=='IDLE')
        {

          this.changeGroupTaskStatusTasks(this.taskGroups[i].arrObjects[j],'running')
        this.taskGroups[i].arrObjects[j].status = 'waiting for restocks(ATC...)';
      
        }
      }
    }

   }

  addTaskToGroup(task : Task){



    for(let i=0; this.taskGroups.length>i; i++){
      if(this.taskGroups[i].name==task.groupName){
      
        this.taskGroups[i].arrObjects.push(task)
        this.taskGroups[i].Count++;

      


        if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
   
          this.taskGroups[i].running++;
        }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
    
          this.taskGroups[i].inBasket++;
        
        }else if(task.status=='unexpected error' || task.status=='payment declined'){
   
          this.taskGroups[i].error++;
        
        }else if(task.status=='succesfully checked out'){

          this.taskGroups[i].success++;
     
        }



      }
    }
    
  }
  
  

  deleteSingleTask(task:Task){

    for(let i = 0 ; this.taskGroups.length>i; i++){
      for(let j=0; this.taskGroups[i].arrObjects.length>j; j++){
        if(this.taskGroups[i].arrObjects[j]==task){
          this.changeGroupTaskStatusTasks(task,'stopped');
          this.taskGroups[i].arrObjects.splice(j,1)
   
            if(task.groupName==this.taskGroups[i].name){
          this.taskGroups[i].Count--;
            }
          
        }
      }
    }

  }


  createTask(siteTaskName:string, profil:string, sizes:string, product:string,  groupName:string, proxyGroup:string, paymentId:string, monitorDelay:number, errorDelay:number, quantity:number){



    for(let i=0; quantity>i; i++){
      for(let j=0; this.taskGroups.length>j; j++)
      {
        if(this.taskGroups[j].name == this.idSite)
        {
       this.addTaskToGroup(new Task(siteTaskName, profil, sizes, product,groupName, proxyGroup, paymentId, monitorDelay, errorDelay));
  
        }
      }
    }
    return 0;
  }
  
  changeGroupTaskStatusTasks(task:Task, statusTaskToChange:string){

    console.log(task.status);
    for(let i=0; this.taskGroups.length>i; i++){
      for(let j=0; this.taskGroups[i].arrObjects.length>j; j++){
       
        if(task==this.taskGroups[i].arrObjects[j]){
          console.log("chuj")

          if(statusTaskToChange=="running"){
 

            if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
              this.taskGroups[i].running--;
              this.taskGroups[i].running++;
            }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
              this.taskGroups[i].inBasket--;
              this.taskGroups[i].running++;
            
            }else if(task.status=='unexpected error' || task.status=='payment declined'){
              this.taskGroups[i].error--;
              this.taskGroups[i].running++;
            
            }else if(task.status=='succesfully checked out'){
              this.taskGroups[i].success--;
              this.taskGroups[i].running++;
         
            }else if(task.status=="IDLE" || task.status=="stopped"){
              this.taskGroups[i].running++;
       
            }
            
          }else if(statusTaskToChange=="inBasket"){

            if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
              this.taskGroups[i].running--
              this.taskGroups[i].inBasket++
              console.log("xd1")
            }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
              this.taskGroups[i].inBasket--;
              this.taskGroups[i].inBasket++
              console.log("xd2")
            }else if(task.status=='unexpected error' || task.status=='payment declined'){
              this.taskGroups[i].error--;
              this.taskGroups[i].inBasket++
              console.log("xd3")
            }else if(task.status=='succesfully checked out'){
              this.taskGroups[i].success--;
              this.taskGroups[i].inBasket++
              console.log("xd4")
            }else if(task.status=="IDLE" || task.status=="stoppped"){
              this.taskGroups[i].inBasket++;
              console.log("xd5")
            }

          }else if(statusTaskToChange=="declined"){
            if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
              this.taskGroups[i].running--
              this.taskGroups[i].error++
            }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
              this.taskGroups[i].inBasket--;
              this.taskGroups[i].error++

            }else if(task.status=='unexpected error' || task.status=='payment declined'){
              this.taskGroups[i].error--;
              this.taskGroups[i].error++
            }else if(task.status=='succesfully checked out'){
              this.taskGroups[i].success--;
              this.taskGroups[i].error++
            }else if(task.status=="IDLE" || task.status=="stoppped"){
              this.taskGroups[i].error++;
            }
          }else if(statusTaskToChange=="success"){
            if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
              this.taskGroups[i].running--;
              this.taskGroups[i].success++;
            }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
              this.taskGroups[i].inBasket--;
              this.taskGroups[i].success++;

            }else if(task.status=='unexpected error' || task.status=='payment declined'){
              this.taskGroups[i].error--;
              this.taskGroups[i].success++;
            }else if(task.status=='succesfully checked out'){
              this.taskGroups[i].success--;
              this.taskGroups[i].success++;
            }else if(task.status=="IDLE" || task.status=="stoppped"){
              this.taskGroups[i].success++;
            }
          }else if(statusTaskToChange=="stopped"){
            console.log("no ok")
            if(task.status=="waiting for restocks(ATC...)" || task.status=="adding to cart..." || task.status=="getting sizes" || task.status=="waiting for release..." ){
              this.taskGroups[i].running--;
              console.log("git")
            }else if(task.status=="processing" || task.status=="submitting order" || task.status=="submitting shipping" || task.status=="submitting billing"){
              this.taskGroups[i].inBasket--;
              console.log("git")
            }else if(task.status=='unexpected error' || task.status=='payment declined'){
              this.taskGroups[i].error--;
              console.log("git")
            }else if(task.status=='succesfully checked out'){
              this.taskGroups[i].success--;
              console.log("git")
            }else if(task.status=="IDLE" || task.status=="stoppped"){
              console.log("git")
            }
          }
        }
      }
    }

  }


  setObjTaskModal(  name:string, profil:string, sizes:string, product:string,  status:string,groupName:string,proxyGroup:string, paymentId:string, monitorDelay:number,errorDelay:number, task:Task){

  this.nameModalTask = name;
  this.profilModalTask = profil;
  this.sizesModalTask = sizes;
  this.productModalTask = product;
  this.statusModalTask = status;
  this.groupNameModalTask = groupName;
  this.proxyGroupModalTask = proxyGroup;
  this.paymentIdModalTask = paymentId;
  this.monitorDelayModalTask = monitorDelay;
  this.errorDelayModalTask = errorDelay;
  
this.entireTaskObj  = task
  console.log("Modal task obj setted!")

  }

  ///dokonczyc!
  saveTaskSettings(entireTaskObj:Task){
    this.entireTaskObj.monitorDelay = this.monitorDelayModalTask
    this.entireTaskObj.product = this.productModalTask;
    this.entireTaskObj.name = this.nameModalTask;
    this.entireTaskObj.profil = this.profilModalTask;
    this.entireTaskObj.sizes=this.sizesModalTask;
    this.entireTaskObj.paymentId = this.paymentIdModalTask;
    this.entireTaskObj.errorDelay = this.errorDelayModalTask;
  }


  ///group Init
   ftlGroup =  new taskGroup('Footlocker',5000,4000,20);
   shopifyGroup =  new taskGroup('ShopifyEU',6000,4000,30);



  constructor(private modalService: NgbModal,  private proxyService:ProxyServiceService ) { }

  ngOnInit(): void {

    console.log(this.proxyGroupNames);

    this.addGroup(this.ftlGroup);
    this.addGroup(this.shopifyGroup);

    for(let i=0; Tasks.length>i; i++){

      if(this.idSite=="")
      {
        this.idSite = Tasks[i].groupName;
        
      }
   
      this.addTaskToGroup(Tasks[i]);
      this.tabChecked.push(false);
  

    }

    this.nrOfTasks = this.taskGroups[0].arrObjects.length;

    console.log(this.proxyGroupNames)

  }

  createGroup(nameGroup: string){
    
    this.addGroup(new taskGroup(nameGroup,4000,5000,20));
  }

  open(content: any ,  ) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})

    console.log(this.nameModalTask)
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
