/// <reference path="IHandler.ts" />

namespace Handler{
    export class header implements method.IHandler {
        next : method.IHandler ;
        data : {lan,name};

        constructor(
            _data : {
                lan   : string,
                name  : string 
            }
        ){
            this.next=null;
            this.data=_data;
        }

        fix(){
            console.log("work is coming.");
            if(this.next==null)
                this.next = new USHandler(this.data);

            return this.next.fix(this.data);
        }
    }

    export class USHandler implements method.IHandler{
        next : method.IHandler ;
        data : {lan,name};
        constructor(
            _data : {
                lan   : string,
                name  : string 
            }
        ){
            this.next=null;
            this.data=_data;
        }
        fix(){
            if(this.data.lan==='US')
                return `Hello ${this.data.name}`
            else
                console.log("not US,next");
           
            if(this.next===null)
                this.next = new ErrorHandler();  

            return this.next.fix(this.data);
        }
    }

    export class TWHandler implements method.IHandler{
        next : method.IHandler ;
        data : {lan,name};
        constructor(
            _data : {
                lan   : string,
                name  : string 
            }
        ){
            this.next=null;
            this.data=_data;
        }
        fix(){
            if(this.data.lan==='TW')
                return `NiHow ${this.data.name}`
            else
                console.log("not TW,next");

            if(this.next===null)
                this.next = new ErrorHandler();   

            return this.next.fix(this.data);
        }
    }

    export class ErrorHandler implements method.IHandler{
        next : method.IHandler ;    
        constructor(){            
        }
        fix(){
            return "No body can handle.";
        }
    }

}