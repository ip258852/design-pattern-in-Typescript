/// <reference path='tree.ts'/>
/// <reference path='node.ts'/>

let newP : node.NewProdDev  = new node.NewProdDev('','');
let mobileP : node.NewProdDev  = new node.MobileProd('','');
let mobileUSBP : node.NewProdDev = new node.MobileUSBProd('','');
let ITP : node.NewProdDev  = new node.ITProd('','');

newP.add(mobileP);
newP.add(ITP);
mobileP.add(mobileUSBP);

newP.printNow();
console.log(newP.subOrganizations);