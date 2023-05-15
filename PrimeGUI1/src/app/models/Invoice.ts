export class Invoice{
    Date:string;
    paymentMethod:string;
    cost:string
    email:string;
    streetBilling1:string;
    streetBilling2:string;
    cityBilling:string;
    postCodeBilling:string;
    countryBilling:string;
    VATID:string;

    constructor(Date:string,paymentMethod:string,cost:string,email:string,streetBilling1:string,streetBilling2:string,cityBilling:string,postCodeBilling:string,countryBilling:string,VATID:string){
        this.Date = Date;
        this.paymentMethod = paymentMethod;
        this.cost = cost;
        this.email = email;
        this.streetBilling1 = streetBilling1;
        this.streetBilling2 = streetBilling2;
        this.cityBilling = cityBilling;
        this.postCodeBilling = postCodeBilling;
        this.countryBilling = countryBilling;
        this.VATID = VATID;
    }
}