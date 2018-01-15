/// <reference path ='data.ts' />
/// <reference path ='passivedec.ts' />
namespace dec{
    export abstract class Decorator implements passiveDec.IPricer {
        customer : string ;
        receiver : string ;
        freight  : string ;
        abstract price(transport : data.Transport):number;
        // 用來取得之前的費率計算方式!!!!!!!!!!!!
        stdPricer : passiveDec.IPricer;

        constructor(_stdPricer : passiveDec.IPricer){
            this.stdPricer=_stdPricer;
            this.customer=_stdPricer.customer;
            this.receiver=_stdPricer.receiver;       
        }
    }

    export class extracPlacePricer extends Decorator {
        constructor(_stdPricer : passiveDec.IPricer) {
            super(_stdPricer);
        }
        price(transport : data.Transport) : number {
            // call loop for every price!!!!!!!!
            let defaultPrice = this.stdPricer.price(transport);
            let servicePrice = 0;
            
            if(transport.ExtraPlaceCnt>0){
                servicePrice = defaultPrice*0.1 ;
            }
            
            let totalprice : number = defaultPrice+Math.floor(servicePrice);
            console.log(`your Extra place price is ${servicePrice},totalPrice is ${totalprice}!`);
            return totalprice;
        }
    }

    export class DelayPricer extends Decorator {
        constructor(_stdPricer : passiveDec.IPricer) {
            super(_stdPricer);
        }
        price(transport : data.Transport) : number {
           
            let defaultPrice = this.stdPricer.price(transport);
            let servicePrice = transport.DelayHours*500;              
            
            let totalprice : number = defaultPrice+servicePrice;
            console.log(`your Delay price is ${servicePrice},totalPrice is ${totalprice}!`);
            return totalprice;
        }
    }

    export class HolidayPricer extends Decorator {
        constructor(_stdPricer : passiveDec.IPricer) {
            super(_stdPricer);
        }
        price(transport : data.Transport) : number {
           
            let defaultPrice = this.stdPricer.price(transport);
            let servicePrice = defaultPrice*0.2;              
            
            let totalprice : number = defaultPrice+servicePrice;
            console.log(`your Holiday price is ${servicePrice},totalPrice is ${totalprice}!`);
            return totalprice;
        }
    }
    
}