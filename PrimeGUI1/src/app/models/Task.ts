export class Task{
      name:string;
      profil:string;
      sizes:string;
      product:string;
      status:string;
      groupName:string;
      proxyGroup:string;
      paymentId:string;
      monitorDelay:number;
      errorDelay:number;

    constructor(name: string, profil: string, sizes:string, product:string, groupName:string, proxyGroup:string, paymentId:string, monitorDelay:number, errorDelay:number){
        this.name = name;
        this.profil = profil;
        this.sizes = sizes;
        this.product = product;
        this.groupName = groupName;
        this.proxyGroup = proxyGroup;
        this.paymentId = paymentId;
        this.monitorDelay = monitorDelay;
        this.errorDelay = errorDelay;
        this.status = "IDLE";
    }

    
}