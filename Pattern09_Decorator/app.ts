/// <reference path ='data.ts' />
/// <reference path ='passivedec.ts' />
/// <reference path ='decorator.ts' />

let transport : data.Transport ={
    miles : 200,
    place : 'Taina',
    ExtraPlaceCnt : 1,
    IsHoliday : false ,
    DelayHours : 3
}

let stdPricer : passiveDec.IPricer = new passiveDec.MilePricer({_customer : '',_receiver :'',_freight :''});


let ExtraPlaceCnt : passiveDec.IPricer = new dec.extracPlacePricer(stdPricer);
ExtraPlaceCnt.price(transport);

let delayPrice    : passiveDec.IPricer = new dec.DelayPricer(ExtraPlaceCnt);
delayPrice.price(transport);