namespace DB{
    export class DBContext{
        server : string;
        constructor(_server : string){
            this.server=_server;
        }
        connect() : void{
            console.log(`Connect to ${this.server}`);
        }
    }
    export enum STATE {
        DATAMART,HISTORY,ONLINE
    }
}