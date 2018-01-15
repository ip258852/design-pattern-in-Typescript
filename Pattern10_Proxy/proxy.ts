/// <reference path ='passivedec.ts' />
/// <reference path ='decorator.ts' />

namespace proxy{
    export class ExtraPlacePricerProxy implements passiveDec.IPricer{
        customer : string ;
        receiver : string ;
        freight  : string ;
        extraPlacePrice : passiveDec.IPricer;
        constructor(pricer : passiveDec.IPricer){
            this.extraPlacePrice= new dec.extracPlacePricer(pricer);
        }
        price(transport : data.Transport) : number {           
            return 0;
        }
    }

    export class DelayPricerProxy implements passiveDec.IPricer{
        customer : string ;
        receiver : string ;
        freight  : string ;
        DelayPlacePrice : passiveDec.IPricer;
        MAX_DELAY_HOURS : number = 2;
        constructor(pricer : passiveDec.IPricer){
            this.DelayPlacePrice= new dec.DelayPricer(pricer);
        }
        price(transport : data.Transport) : number {           
            let totalPrice : number = 0 ;        
            let servicePrice : number = 0 ;
            let exceedMaxDelayJours : number =0 ;
            
            if(transport.DelayHours<=this.MAX_DELAY_HOURS){
                totalPrice = this.DelayPlacePrice.price(transport);
            }else{
                exceedMaxDelayJours = transport.DelayHours-this.MAX_DELAY_HOURS;
                transport.DelayHours = this.MAX_DELAY_HOURS;
                totalPrice = this.DelayPlacePrice.price(transport);
            }

            servicePrice = exceedMaxDelayJours * 1000 ;
            totalPrice+=servicePrice;
            console.log(`delay over two hours fee is ${servicePrice},total fee is ${totalPrice} !`);
            return totalPrice;
        }
    }
}