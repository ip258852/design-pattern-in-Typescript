/// <reference path = 'DB.ts'/>
namespace staticFac{
    export class StaticFac{
        static create(par : DB.STATE) : DB.DBContext{
            switch(par){
                case  DB.STATE.ONLINE :
                    return new DB.DBContext('Online');
                case DB.STATE.HISTORY :
                    return new DB.DBContext('History');
                case DB.STATE.DATAMART:
                    return new DB.DBContext('Datamart');
                default :
                    throw new Error('No DB!!!!');
            }
        }
    }
}