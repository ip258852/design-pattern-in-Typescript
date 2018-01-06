/// <reference path="interpeter.ts" />
/// <reference path="methos.ts" />

let method = {
    fix5Up(arr : number[]):void{ 
        let fix = arr.reduce((pre : number,data : number) => pre+data);
        console.log(`ths answer is ${fix%10}.`);
    },  
    fix5Less(arr : number[]) : void{ 
        let fix = arr.reduce((pre : number,data : number) => pre-data);
        console.log(`ths answer is ${fix*3}.`);
    }
}

let itA = new interpeter.Interpeter(method);
let arrayA : number[]= [50,7,6,8,2];
let arrayB : number[]= [15,87,51,2,64,79,65,79,47];
itA.fix(arrayA);
itA.fix(arrayB);
