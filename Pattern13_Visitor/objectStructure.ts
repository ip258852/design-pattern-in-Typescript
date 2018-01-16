/// <reference path = 'visit.ts' />
/// <reference path = 'element.ts' />

namespace objectStructure{
    export interface IObjectStrure{
        list : Array<element.IElement> ;
        attach(element : element.IElement) : void ,
        detach(element : element.IElement) : void ,
        accept(visit : visit.Visit) : void ,
    }

    export class ObjectStrure implements IObjectStrure{
        list : Array<element.IElement> ;
        constructor(){
            this.list = new Array<element.IElement>();
        }
        attach(element : element.IElement) : void {
            this.list.push(element);
        }
        detach(element : element.IElement) : void {
            let index =this.list.indexOf(element);
            this.list.splice(index,1);
        }
        accept(visit : visit.Visit) : void {
            this.list.forEach(
                (val) => { val.accept(visit); }
            );
        }
    }
}