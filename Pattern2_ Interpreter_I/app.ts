let arrayA : number[]= [50,7,6,8,2];
let arrayB : number[]= [15,87,51,2,64,79,65,79,47];


class Interpeter {
    _Arr : number[];
    constructor(array : number[]){
        this._Arr = array ;
    }
    interpeter(){
        if(this._Arr.length>5){
            let sum : number = this._Arr.reduce((pre : number,data : number) => pre +data);
            return sum%10 ;
        }else if (this._Arr.length<=5){
            let sum : number = this._Arr.reduce((pre : number,data : number) => pre -data);
            return sum*3;
        }
    }
}

let itA = new Interpeter(arrayA);
let itB = new Interpeter(arrayB);

console.log(itA.interpeter());
console.log(itB.interpeter());