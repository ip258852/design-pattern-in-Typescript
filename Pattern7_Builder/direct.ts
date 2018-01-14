/// <reference path='data.ts'/>
/// <reference path='builder.ts'/>

namespace direct{
    export class Direct{
        protected builder : builder.IBuilder ;
        constructor(_builder : builder.IBuilder){
            this.builder=_builder;
        }
        virtual construct() : data.IData {
            let work = this.builder.init();
            this.builder.buildReport(work);
            this.builder.buildRecord(work);
            return work;
        }
    }
}