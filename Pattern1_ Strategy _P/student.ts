/// <reference path="method.ts" />
/// <reference path="role.ts" />
namespace student{       
    export class JK implements role.student{
        hair : number ;
        age : number;
        times : number;
        
        constructor( 
            property : {
                hair : number ,
                age  : number,
                times: number
            },
            method   : {
                showAge()   : void,
                showTimes() : void,
                showHair()  : void 
            }
        ){
            this.hair = property.hair;
            this.age  = property.age;
            this.times= property.times;
            this.showAge  = method.showAge;
            this.showHair = method.showHair;
            this.showTimes=method.showTimes;
        }

        showTimes(){
           
        };
        showAge(){
             
        };
        showHair(){
             
        };
    }
}