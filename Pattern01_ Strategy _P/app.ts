/// <reference path="method.ts" />
/// <reference path="role.ts" />
/// <reference path="student.ts" />

let baiscEle =  {
    hair : 6,
    age  : 18,
    times: 2
} 
let baiscFuc = {
    showAge()   : void {console.log(`My age is ${this.age}`);},
    showTimes() : void {console.log(`Sex ${this.times}`);},
    showHair()  : void {console.log('My hair is black');}
}

let Mimi = new student.JK(baiscEle,baiscFuc);
Mimi.showAge();
Mimi.showHair();
Mimi.showTimes();
 