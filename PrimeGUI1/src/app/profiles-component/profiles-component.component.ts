import { Component, OnInit } from '@angular/core';
import ProfilesData from './ProfilesData/ProfilesData.json';
import { Profile } from '../models/Profile';
import { ProfileGroup } from '../models/ProfileGroup';
import {faEllipsis, faPenToSquare, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profiles-component',
  templateUrl: './profiles-component.component.html',
  styleUrls: ['./profiles-component.component.css']
})
export class ProfilesComponentComponent implements OnInit {
  closeResult = '';

  faEllipsis = faEllipsis;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;

  idProfilesGroup="";
  profilesGroupTab:ProfileGroup[] = [];

  selectedTab = "payment";

changeEditTab(tab:string){
this.selectedTab = tab;
}

  pushProfileToGroup(profile:Profile, profileGroup:ProfileGroup){
    profileGroup.arrObjects.push(profile)
    console.log("ez1")
    console.log(profileGroup)
    console.log(profileGroup.arrObjects.length)
  }

  pushProfileGrouptoArr(profileGroup:ProfileGroup){
    this.profilesGroupTab.push(profileGroup);
    console.log("ez2")
    console.log(this.profilesGroupTab)
  }

  changeIdGroup(idProfilesGroup:string){
    this.idProfilesGroup = idProfilesGroup;
  }

  newGroupName:string;
  createGroup(newGroupName:string){

    this.pushProfileGrouptoArr(new ProfileGroup(newGroupName));

  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    for(let i = 0; ProfilesData.length>i; i++){
      if(this.idProfilesGroup==""){
        this.idProfilesGroup = ProfilesData[i].profileGroup;
      }
      if(this.profilesGroupTab.length>0){
      for(let j = 0 ; this.profilesGroupTab.length>j; j++){
        if(this.profilesGroupTab[j].name==ProfilesData[i].profileGroup){
          break;
        }
        if(this.profilesGroupTab.length==j+1){
        this.pushProfileGrouptoArr(new ProfileGroup(ProfilesData[i].profileGroup));
        }
      }
    }else{
      this.pushProfileGrouptoArr(new ProfileGroup(ProfilesData[i].profileGroup));
    }


    for(let k = 0; this.profilesGroupTab.length>k; k++)
    {
      if(this.profilesGroupTab[k].name==ProfilesData[i].profileGroup)
      {
      this.pushProfileToGroup(ProfilesData[i],this.profilesGroupTab[k])

      }
    }

    }

    this.pushProfileGrouptoArr(new ProfileGroup("eloelo"))

  }


   profileNameModal:string;
    sameBillingAsShippingModal:boolean;
    emailModal:string;
    telModal:number;
    nameModal:string;
    secondNameModal:string;
    cardValModal:string;
    cardDateMonthModal:number;
    cardDateYearModal:number;
    cardCVVModal:number;
    shippingStreetModal:string;
    shippingStreet2Modal:string;
    shippingCityModal:string;
    shippingPostCodeModal:string;
    shippingStateModal:string;
    billingStreetModal:string;
    billingStreet2Modal:string;
    billingCityModal:string;
    billingPostCodeModal:string;
    billingStateModal:string;
    profileGroupModal:string;


    cardDateConverted:string;


    cartModalConvert(){
      this.cardValModal = this.cardValModal.substring(0,4)+" "+this.cardValModal.substring(4,8)+" "+this.cardValModal.substring(8,12)+" "+this.cardValModal.substring(12,16)+" "
    }

    cardDateConvert(){
      this.cardDateConverted = this.cardDateMonthModal+"/"+this.cardDateYearModal;
    }



    setObjProfileModal(  profileNameModal:string,sameBillingAsShippingModal:boolean, emailModal:string, telModal:number,nameModal:string,secondNameModal:string,cardValModal:string,cardDateMonthModal:number,cardDateYearModal:number,cardCVVModal:number,shippingStreetModal:string,shippingStreet2Modal:string,shippingCityModal:string,shippingPostCodeModal:string,shippingStateModal:string,billingStreetModal:string,billingStreet2Modal:string, billingCityModal:string,billingPostCodeModal:string,billingStateModal:string,profileGroupModal:string,){
        this.profileNameModal = profileNameModal;
    this.sameBillingAsShippingModal = sameBillingAsShippingModal;
    this.emailModal=emailModal;
    this.telModal = telModal;
    this.nameModal = nameModal;
    this.secondNameModal = secondNameModal;
    this.cardValModal= cardValModal;
    this.cardDateMonthModal = cardDateMonthModal;
    this.cardDateYearModal = cardDateYearModal;
    this.cardCVVModal = cardCVVModal;
    this.shippingStreetModal = shippingStreetModal;
    this.shippingStreet2Modal = shippingStreet2Modal;
    this.shippingCityModal = shippingCityModal;
    this.shippingPostCodeModal = shippingPostCodeModal;
    this.shippingStateModal = shippingStateModal;
    this.billingStreetModal = billingStreetModal;
    this.billingStreet2Modal = billingStreet2Modal;
    this.billingCityModal = billingCityModal;
    this.billingPostCodeModal = billingPostCodeModal;
    this.billingStateModal = billingStateModal;
    this.profileGroupModal = profileGroupModal;
    this.cartModalConvert()
    this.cardDateConvert()
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
