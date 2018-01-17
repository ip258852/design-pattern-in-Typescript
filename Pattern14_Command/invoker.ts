/// <reference path='command.ts' />
namespace invoke{
    export class Invoke{
        commands : Array<command.Command> = null ;
        constructor(){
            this.commands=new Array<command.Command>();
        }
        addCommand(command :command.Command){
            this.commands.push(command);
        }
        cancelCommand(command :command.Command){
            let index = this.commands.indexOf(command);
            this.commands.splice(index,1);
        }
        invoke(){
            this.commands.forEach(
                (val)=>{ val.execute();}
            );
        }
    }
}