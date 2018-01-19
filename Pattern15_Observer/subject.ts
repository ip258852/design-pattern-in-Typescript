/// <reference path = 'observer.ts' />
namespace subject{
    export interface ISubject{
        observers : Array<observer.IObserver>;
        attach(ob : observer.IObserver) : void;
        detach(ob : observer.IObserver) : void;
        notify(absence : string , designee : string) : void;
    }
    export class Subjectflow implements ISubject{
        observers : Array<observer.IObserver>;
        constructor(){
            this.observers=new Array<observer.IObserver>();
        }
        attach(ob : observer.IObserver) : void{
            if(this.observers.indexOf(ob)===-1){
                this.observers.push(ob);
            }
        };
        detach(ob : observer.IObserver) : void{
            if(this.observers.indexOf(ob)!==-1){
                let index : number = this.observers.indexOf(ob);
                this.observers.splice(index,1);
            }
        }
        
        notify(absence : string , designee : string) : void{
            this.observers.forEach(
                (val) => { val.update(absence,designee);}
            );
        }
    }
}