/// <reference path='DB.ts'/>
namespace abstractFac{
    abstract class abstractFac {
        
        abstract create() : DB.DBContext;
    }

    export class HistoryDB extends abstractFac {
        create(){
            return new DB.DBContext('History');
        }
    } 
    export class ONLINEDB extends abstractFac {
        create(){
            return new DB.DBContext('History');
        }
    } 
    export class DATAMARTDB extends abstractFac {
        create(){
            return new DB.DBContext('History');
        }
    } 
}