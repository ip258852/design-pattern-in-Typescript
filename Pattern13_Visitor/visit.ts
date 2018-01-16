/// <reference path = 'element.ts' />

namespace visit{
    export abstract class Visit {
        abstract visit(ele : element.IElement) : void;
    }

    export class VisitDis40 extends Visit{
        visit(ele : element.IElement) : void {
            if(ele.Amount>=10){
                ele.totalPrice = ele.UnitPrice * ele.Amount * 0.8 ;
                console.log(`total is ${ele.totalPrice},unit is ${ele.UnitPrice},amount is ${ele.Amount}`);
            }else{
                ele.totalPrice = ele.UnitPrice * ele.Amount;
                console.log(`total is ${ele.totalPrice},unit is ${ele.UnitPrice},amount is ${ele.Amount}`);
          
            }
        }
    }

    export class VisitDis90 extends Visit{
        visit(ele : element.IElement) : void {
            let totalPrice : number = ele.UnitPrice * ele.Amount;
            if(totalPrice > 1000){
                ele.totalPrice = ele.UnitPrice * ele.Amount * 0.8 ;
                console.log(`total is ${ele.totalPrice},unit is ${ele.UnitPrice},amount is ${ele.Amount}`);
            }else{
                ele.totalPrice = ele.UnitPrice * ele.Amount;
                console.log(`total is ${ele.totalPrice},unit is ${ele.UnitPrice},amount is ${ele.Amount}`);
          
            }
        }
    }

}