namespace DB{
    export interface IDbcontext{
        server : string ;
        connectString : string ;
        connect() : void ;
    }

    export class MartDB implements IDbcontext{
        server : string = 'DataMart';
        connectString : string = 'DataMart connection string ';
        connect() :void{
            console.log(`connect to ${this.server}`);
        }
    }

    export class HistoryDB implements IDbcontext{
        server : string = 'History';
        connectString : string = 'History connection string ';
        connect() :void{
            console.log(`connect to ${this.server}`);
        }
    }

    export class OnlineDB implements IDbcontext{
        server : string = 'Online';
        connectString : string = 'Online connection string ';
        connect() :void{
            console.log(`connect to ${this.server}`);
        }
    }

    export  class GenericDBFac<T extends IDbcontext>{
        // 給new Object 一個保證
        // 保證我一定建立T的實作class
        static create<T>( type : { new (): T ;}) : T {
            return new type ();
        }
    }
}