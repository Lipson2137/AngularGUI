import { Group } from "./Group";
import { Profile } from "./Profile";

export class ProfileGroup  extends Group{

    Count:number;
    arrObjects:Profile[];
    
    constructor(name:string){
       super(name);
       this.arrObjects = [];
       this.Count = this.arrObjects.length;
    }

}