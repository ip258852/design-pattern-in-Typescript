/// <reference path = 'visit.ts' />
/// <reference path = 'element.ts' />
/// <reference path = 'objectStructure.ts' />

///// single
let ele1 : element.IElement = new element.Product(element.ProductTypeEnum.BOOK,'designA',48,20,0);
ele1.accept(new visit.VisitDis40());

console.log('--single up-----');
console.log('--muti   down---');


///// muti
let ele4 : element.IElement = new element.Product(element.ProductTypeEnum.BOOK,'designD',23,25,0);
 
let eleArray : Array<element.IElement> = new Array<element.IElement>(
    new element.Product(element.ProductTypeEnum.BOOK,'designA',480,20,0),
    new element.Product(element.ProductTypeEnum.ELECTRONIC,'designB',580,5,0),
);

let checkOut :  objectStructure.ObjectStrure =new objectStructure.ObjectStrure();
eleArray.forEach(
    (val) => {  checkOut.attach(val); }
);
checkOut.accept(new visit.VisitDis40());