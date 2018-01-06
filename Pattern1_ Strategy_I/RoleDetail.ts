/// <reference path="JKelements.ts" />
/// <reference path="Role.ts" />
namespace RoleDetail{    
    export class JK {
        private ele : JKelements.IHair&JKelements.ISex;
        constructor(ele:JKelements.IHair&JKelements.ISex){
            this.ele=ele;
        }
        show(){
            return this.ele.show();
        }
        showSex(){
            return this.ele.showSex();
        }
    }    
    export class Dancer{
        private ele :JKelements.IAge&JKelements.ISex;
        constructor(ele:JKelements.IAge&JKelements.ISex){
            this.ele=ele;
        }
        showAge(){
            return this.ele.showAge();
        }
        showSex(){
            return this.ele.showSex();
        }
    }    
}