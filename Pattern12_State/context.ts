/// <reference path = 'state.ts'/>

namespace context{
    export class context {
        state : state.State;
        constructor() {
            this.state=new state.StateTodo();
        }
        action():void{
            this.state.action(this);
        }
    }
}