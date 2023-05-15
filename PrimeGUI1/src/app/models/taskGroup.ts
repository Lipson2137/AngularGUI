import { Group } from "./Group";
import { Task} from '../models/Task';
  
export class taskGroup extends Group{

    running:number;
    inBasket:number;
    error:number;
    success:number;
    monitorDelay:number;
    retryDelay:number;
    timeout:number;

    arrObjects:Task[];
    Count:number;

    constructor(name: string, monitorDelay:number, retryDelay:number, timeout:number){
        super(name)
        this.running = 0;
        this.inBasket = 0;
        this.error = 0;
        this.success = 0;
        this.arrObjects = [];
        this.Count = this.arrObjects.length;
        this.monitorDelay = monitorDelay;
        this.retryDelay = retryDelay;
        this.timeout = timeout;
    }
}