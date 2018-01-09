/// <reference path='DB.ts'/>
namespace abstractFac{
    abstract class abstractFac {
        server : DB.STATE ;
        constructor(_server : DB.STATE) {
            this.server=_server;
        }
        abstract create() : void;
    }

    export class HistoryDB extends abstractFac {
        constructor(_server : DB.STATE) {
            super(_server);
        }
        create(){
            console.log(`create ${this.server}.`);
        }
    }
    export class DatamartDB extends abstractFac {
        constructor(_server : DB.STATE) {
            super(_server);
        }
        create(){
            console.log(`create ${this.server}.`);
        }
    }
    export class OnlineDB extends abstractFac {
        constructor(_server : DB.STATE) {
            super(_server);
        }
        create(){
            console.log(`create ${this.server}.`);
        }
    }
}