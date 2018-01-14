namespace data{
    export interface IData{
        targetBU : string ;
        report   : string ;
        record   : string ;
    }
    export class Data implements IData{
        targetBU : string ;
        report   : string ;
        record   : string ;        
    }
}