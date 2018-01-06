/// <reference path="JKelements.ts" />
namespace Role{    
    export class Student implements JKelements.IHair,JKelements.ISex{
        length : number;
        color  : string;
        Sex    : number;
        constructor(length :number,color :string,sex:number){
            this.length=length;
            this.color=color;    
            this.Sex=sex;
        }
        show(){
            return `my hair is ${this.color},and len is ${this.length} cm`;
        }
        showSex(){
            return `I sex ${this.Sex} times`;
        }
    }
    export class HotSister implements JKelements.IAge,JKelements.ISex{
        Sex    : number;       
        age    : number;
        constructor(Sex:number,age:number,showAge:(()=>string)){
            this.showAge = showAge||this.showAge;
            this.age=age;
            this.Sex=Sex;
        }
        showSex(){
            return `I sex ${this.Sex} times`;
        }
        showAge(){
            return `I am ${this.age}`;
        };
    }
}