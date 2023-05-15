import{Proxy} from '../models/Proxy'
import { Group } from './Group';

export class ProxyGroup extends Group{

    proxyObjects:Proxy[];
    Count:number;

    constructor(name: string){
        super(name)
        this.proxyObjects = [];
        this.Count = this.proxyObjects.length;

    }
}