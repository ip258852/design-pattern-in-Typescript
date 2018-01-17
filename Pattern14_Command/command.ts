/// <reference path='receiver.ts'/>
namespace command{
    export abstract class Command {
        receiver : receiver.IReceiver;
        constructor(_receiver : receiver.IReceiver) {
            this.receiver=_receiver;
        }
        abstract execute() :　void ;
    }

    export class CmdBreakthrough extends Command{
        constructor(_receiver : receiver.IReceiver){
            super(_receiver);
        }
        execute() : void {
            this.receiver.gather();
            this.receiver.fire();
        }
    }

    export class CmdDefense extends Command{
        constructor(_receiver : receiver.IReceiver){
            super(_receiver);
        }
        execute() : void {
            this.receiver.setHighGround();
            this.receiver.hold();
        }
    }

    export class CmdSupport extends Command{
        constructor(_receiver : receiver.IReceiver){
            super(_receiver);
        }
        execute() : void {             
            this.receiver.support();
        }
    }

    
}