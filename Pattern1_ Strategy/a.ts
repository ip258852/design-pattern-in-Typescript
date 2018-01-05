//原始策略模式JS檔案,後來拆了!

export namespace JKIsGood{
    export interface IHair{
        length : number;
        color  : string;
        show() : void;
    }
    
    export interface ISex{
        Sex : number;
        showSex(): void;
    }
    
    export class Student implements IHair,ISex{
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
    
    export class JK {
        private ele : IHair&ISex;
        constructor(ele:IHair&ISex){
            this.ele=ele;
        }
        show(){
            return this.ele.show();
        }
        showSex(){
            return this.ele.showSex();
        }
    }        
 }