export class Profile{
    profileName:string;
    sameBillingAsShipping:boolean;
    email:string;
    tel:number;
    name:string;
    secondName:string;
    cardVal:string;
    cardDateMonth:number;
    cardDateYear:number;
    cardCVV:number;
    shippingStreet:string;
    shippingStreet2:string;
    shippingCity:string;
    shippingPostCode:string;
    shippingState:string;
    billingStreet:string;
    billingStreet2:string;
    billingCity:string;
    billingPostCode:string;
    billingState:string;
    profileGroup:string;

    
    constructor(profileName:string,sameBillingAsShipping:boolean,email:string,tel:number,name:string,secondName:string,cardVal:string,  cardDateMonth:number,  cardDateYear:number, cardCVV:number, shippingStreet:string,shippingStreet2:string,shippingCity:string,shippingPostCode:string,shippingState:string, billingStreet:string,billingStreet2:string,billingCity:string,billingPostCode:string,billingState:string, profileGroup:string){
        this.profileName = profileName;
        this.sameBillingAsShipping = sameBillingAsShipping;
        this.email = email;
        this.tel = tel;
        this.name = name;
        this.secondName = secondName;
        this.cardVal = cardVal;
        this.cardDateMonth = cardDateMonth;
        this.cardDateYear = cardDateYear;
        this.cardCVV = cardCVV;
        this.shippingStreet = shippingStreet;
        this.shippingStreet2 = shippingStreet2;
        this.shippingCity = shippingCity;
        this.shippingPostCode = shippingPostCode;
        this.shippingState = shippingState;
        this.billingStreet = billingStreet;
        this.billingStreet2 = billingStreet2;
        this.billingCity = billingCity;
        this.billingPostCode = billingPostCode;
        this.billingState = billingState;
        this.profileGroup = profileGroup;

    }



}