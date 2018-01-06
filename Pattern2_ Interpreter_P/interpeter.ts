/// <reference path="methos.ts" />
namespace interpeter{
    export class Interpeter implements method.IFix5Less,method.IFix5Up{
        fix5Less(arr : number[]){};
        fix5Up(arr : number[]){};
        constructor(method : {
            fix5Up(arr : number[])   : void,
            fix5Less(arr : number[]) : void, 
        }){
            this.fix5Up=method.fix5Up;
            this.fix5Less=method.fix5Less;
        }
        //logic fix
        fix(arr : number[]){
            if(arr.length>5) this.fix5Up(arr);
            else if (arr.length<=5) this.fix5Less(arr);
        }
    }
}