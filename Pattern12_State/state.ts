/// <reference path ='context.ts'/>

namespace state{
    export abstract class State {
        abstract action(context : context.context) : void ;
    }
    export class StateTodo extends State {
         action(context : context.context) : void {
            console.log('today is good day to todo!');
            context.state=new StateWorking();
         }
    }
    export class StateWorking extends State {
        action(context : context.context) : void {
            console.log('today is good day to Working!');
            context.state=new StateTesting();
        }
    }
    export class StateTesting extends State {
        action(context : context.context) : void {
            console.log('today is good day to Test!');
            context.state=new StateDone();
        }
    }
    export class StateDone extends State {
        action(context : context.context) : void {
            console.log('today is good day to Done!');
            context.state=null;
        }
    }
}