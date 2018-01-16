/// <reference path = 'state.ts'/>
/// <reference path = 'context.ts'/>

let c = new context.context();
while(c.state !==null) {
    c.action();
}