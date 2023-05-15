export class Checkout{
    name:string;
    site:string;
    whenDay:string;
    price:number;
    img:string;

    constructor (name:string, site:string,
        whenDay:string, price:number, img:string){
            this.name = name;
            this.site = site;
            this.whenDay = whenDay;
            this.price = price;
            this.img = img;
        }
}