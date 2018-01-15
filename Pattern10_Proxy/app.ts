/// <reference path ='data.ts' />
/// <reference path ='passivedec.ts' />
/// <reference path ='decorator.ts' />
/// <reference path ='proxy.ts' />

let transport : data.Transport ={
    miles : 200,
    place : 'Taina',
    ExtraPlaceCnt : 1,
    IsHoliday : false ,
    DelayHours : 5
}

let stdPricer : passiveDec.IPricer = new passiveDec.MilePricer({_customer : '',_receiver :'',_freight :''}); 

let delayPrice    : passiveDec.IPricer = new dec.DelayPricer(stdPricer);
delayPrice.price(transport);

console.log('------------------');

let dedade  : passiveDec.IPricer = new proxy.DelayPricerProxy(stdPricer);
dedade.price(transport);