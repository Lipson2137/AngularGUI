export class Proxy{
proxy:string;
login:string;
password:string;
port:number;
proxyGroup:string;
status:string

constructor(proxy:string,login:string,password:string,port:number,proxyGroup:string){
    this.proxy = proxy;
    this.login = login;
    this.password = password;
    this.port = port;
    this.proxyGroup = proxyGroup;
    this.status = 'IDLE'


}

}