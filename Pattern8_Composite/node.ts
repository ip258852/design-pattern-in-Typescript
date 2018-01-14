/// <reference path='tree.ts'/>
namespace node{
    export class NewProdDev extends tree.Organization {
        subOrganizations : Array<tree.Organization>;
        title : string;
        head  : string;
        constructor(_title : string,_head : string) {
            super();
            this.title = _title;
            this.head  = _head;
            this.subOrganizations=new Array<tree.Organization>();
        }
        
        add(item : tree.Organization){           
            this.subOrganizations.push(item);
        }
        remove(item : tree.Organization){
            let pos : number = this.subOrganizations.indexOf(item);
            this.subOrganizations.splice(pos,1);
        }
        printNow(){
            console.log('NewProdDev');
        }
    }

    export class MobileProd extends NewProdDev {
        constructor(_title : string,_head : string) {
            super(_title,_head);            
        }

        printNow(){
            console.log('MobileProd');
        }
    }

    export class MobileUSBProd extends NewProdDev {
        constructor(_title : string,_head : string) {
            super(_title,_head);            
        }

        printNow(){
            console.log('MobileUSBProd');
        }
    }

    export class ITProd extends NewProdDev {
        constructor(_title : string,_head : string) {
            super(_title,_head);            
        }

        printNow(){
            console.log('ITProd');
        }
    }
}