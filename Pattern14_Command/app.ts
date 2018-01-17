/// <reference path='command.ts' />
/// <reference path='receiver.ts' />
/// <reference path='invoker.ts' />

let army : receiver.IReceiver = new receiver.ReciverArmy();
let navy : receiver.IReceiver = new receiver.ReciverNavy();
let airForce : receiver.IReceiver=new receiver.ReciverAirForce();

let invokerLand : invoke.Invoke = new invoke.Invoke();
let commandLand : Array<command.Command> = new Array<command.Command>(
            new command.CmdBreakthrough(army),
            new command.CmdDefense(navy),
            new command.CmdSupport(airForce)
        );
commandLand.forEach(
    (cmd)=>{ invokerLand.addCommand(cmd); }
);

console.log('GOGOGO land!!!!');
invokerLand.invoke();

console.log('GOGOGO armani!!!');
invokerLand.cancelCommand(commandLand[2]);
invokerLand.addCommand(new command.CmdBreakthrough(airForce));
invokerLand.invoke();
