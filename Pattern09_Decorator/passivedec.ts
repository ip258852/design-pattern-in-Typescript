/// <reference path ='data.ts' />
namespace passiveDec {
    
    export interface IPricer{
        customer : string ;
        receiver : string ;
        freight  : string ;
        price(transport : data.Transport)  : number ;
    }

    export class MilePricer implements IPricer{
        customer : string ;
        receiver : string ;
        freight  : string ;

        constructor(obj : {_customer:string,_receiver:string,_freight:string}){
            this.customer=obj._customer;
            this.receiver=obj._receiver;
            this.freight=obj._receiver;
        }

        price(transport : data.Transport) : number {
            let totalprice = transport.miles*30;
            console.log(`mile price is ${totalprice}`);
            return totalprice;
        }
    }

    export class PlacePricer implements IPricer{
        customer : string ;
        receiver : string ;
        freight  : string ;

        constructor(obj : {_customer:string,_receiver:string,_freight:string}){
            this.customer=obj._customer;
            this.receiver=obj._receiver;
            this.freight=obj._receiver;
        }

        price(transport : data.Transport) : number {
            let totalprice = 0;
            switch(transport.place){
                case 'Taina' :
                    totalprice = 2000;
                    break;
                case 'Taipei' :
                    totalprice = 5000;
                    break;
                default :
                    totalprice= 9999;
                    break;
            }
            console.log(`place cnt is ${totalprice}`);
            return totalprice;
        }
    }

}