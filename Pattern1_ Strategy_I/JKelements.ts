//定義女孩們的元素
//目前有頭髮 性愛 年齡
namespace JKelements{
    export interface IHair{
        length : number;
        color  : string;
        show() : void;
    }
    export interface ISex{
        Sex : number;
        showSex(): void;
    }  
    export interface IAge{
        age : number;
        showAge():void;
    }  
}
 