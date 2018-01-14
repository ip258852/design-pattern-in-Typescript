/// <reference path = 'data.ts'/>

namespace builder{
    export interface IBuilder{
        init() : data.IData;
        buildReport(data : data.IData) : void ;
        buildRecord(data : data.IData) : void ;
        
    }
    //SOP 在這 或 可使用的方法在這!!!!!!
    export class BuilderFI implements IBuilder{
        init(){
            console.log('ini build FI');
            let main = new data.Data();
            main.targetBU = "Financial Department";
            return main ;
        }

        buildReport(data : data.IData){
            data.report='ROI report';
            console.log(`Building Report from BuilderFI which is ${data.report}!`);
        }

        buildRecord(data : data.IData){
            data.record='20180114';
            console.log(`Building LeaveRecord from BuilderFI from ${data.record}!`);
        }        
    }

    export class BuilderIT implements IBuilder{
        init(){
            console.log('Initializing from BuilderIT!');
            let main = new data.Data();
            main.targetBU = "IT";
            return main ;
        }

        buildReport(data : data.IData){
            data.report='overtime report';
            console.log(`Building Report from BuilderIT which is ${data.report}!`);
        }

        buildRecord(data : data.IData){
            data.record='20180214';
            console.log(`Building LeaveRecord from BuilderIT from ${data.record}!`);
        }        
    }
}