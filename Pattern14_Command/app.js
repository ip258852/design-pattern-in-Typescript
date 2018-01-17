var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var receiver;
(function (receiver) {
    var ReciverArmy = /** @class */ (function () {
        function ReciverArmy() {
        }
        ReciverArmy.prototype.gather = function () {
            console.log('[Army] gatherArmy!');
        };
        ReciverArmy.prototype.fire = function () {
            console.log('[Army] fire!');
        };
        ReciverArmy.prototype.setHighGround = function () {
            console.log('[Army] setHighGround!');
        };
        ReciverArmy.prototype.hold = function () {
            console.log('[Army] hold!');
        };
        ReciverArmy.prototype.support = function () {
            console.log('[Army] support!');
        };
        return ReciverArmy;
    }());
    receiver.ReciverArmy = ReciverArmy;
    var ReciverAirForce = /** @class */ (function () {
        function ReciverAirForce() {
        }
        ReciverAirForce.prototype.gather = function () {
            console.log('[AirForce] gatherArmy!');
        };
        ReciverAirForce.prototype.fire = function () {
            console.log('[AirForce] fire!');
        };
        ReciverAirForce.prototype.setHighGround = function () {
            console.log('[AirForce] setHighGround!');
        };
        ReciverAirForce.prototype.hold = function () {
            console.log('[AirForce] hold!');
        };
        ReciverAirForce.prototype.support = function () {
            console.log('[AirForce] support!');
        };
        return ReciverAirForce;
    }());
    receiver.ReciverAirForce = ReciverAirForce;
    var ReciverNavy = /** @class */ (function () {
        function ReciverNavy() {
        }
        ReciverNavy.prototype.gather = function () {
            console.log('[Navy] gatherArmy!');
        };
        ReciverNavy.prototype.fire = function () {
            console.log('[Navy] fire!');
        };
        ReciverNavy.prototype.setHighGround = function () {
            console.log('[Navy] setHighGround!');
        };
        ReciverNavy.prototype.hold = function () {
            console.log('[Navy] hold!');
        };
        ReciverNavy.prototype.support = function () {
            console.log('[Navy] support!');
        };
        return ReciverNavy;
    }());
    receiver.ReciverNavy = ReciverNavy;
})(receiver || (receiver = {}));
/// <reference path='receiver.ts'/>
var command;
(function (command) {
    var Command = /** @class */ (function () {
        function Command(_receiver) {
            this.receiver = _receiver;
        }
        return Command;
    }());
    command.Command = Command;
    var CmdBreakthrough = /** @class */ (function (_super) {
        __extends(CmdBreakthrough, _super);
        function CmdBreakthrough(_receiver) {
            return _super.call(this, _receiver) || this;
        }
        CmdBreakthrough.prototype.execute = function () {
            this.receiver.gather();
            this.receiver.fire();
        };
        return CmdBreakthrough;
    }(Command));
    command.CmdBreakthrough = CmdBreakthrough;
    var CmdDefense = /** @class */ (function (_super) {
        __extends(CmdDefense, _super);
        function CmdDefense(_receiver) {
            return _super.call(this, _receiver) || this;
        }
        CmdDefense.prototype.execute = function () {
            this.receiver.setHighGround();
            this.receiver.hold();
        };
        return CmdDefense;
    }(Command));
    command.CmdDefense = CmdDefense;
    var CmdSupport = /** @class */ (function (_super) {
        __extends(CmdSupport, _super);
        function CmdSupport(_receiver) {
            return _super.call(this, _receiver) || this;
        }
        CmdSupport.prototype.execute = function () {
            this.receiver.support();
        };
        return CmdSupport;
    }(Command));
    command.CmdSupport = CmdSupport;
})(command || (command = {}));
/// <reference path='command.ts' />
var invoke;
(function (invoke) {
    var Invoke = /** @class */ (function () {
        function Invoke() {
            this.commands = null;
            this.commands = new Array();
        }
        Invoke.prototype.addCommand = function (command) {
            this.commands.push(command);
        };
        Invoke.prototype.cancelCommand = function (command) {
            var index = this.commands.indexOf(command);
            this.commands.splice(index, 1);
        };
        Invoke.prototype.invoke = function () {
            this.commands.forEach(function (val) { val.execute(); });
        };
        return Invoke;
    }());
    invoke.Invoke = Invoke;
})(invoke || (invoke = {}));
/// <reference path='command.ts' />
/// <reference path='receiver.ts' />
/// <reference path='invoker.ts' />
var army = new receiver.ReciverArmy();
var navy = new receiver.ReciverNavy();
var airForce = new receiver.ReciverAirForce();
var invokerLand = new invoke.Invoke();
var commandLand = new Array(new command.CmdBreakthrough(army), new command.CmdDefense(navy), new command.CmdSupport(airForce));
commandLand.forEach(function (cmd) { invokerLand.addCommand(cmd); });
console.log('GOGOGO land!!!!');
invokerLand.invoke();
console.log('GOGOGO armani!!!');
invokerLand.cancelCommand(commandLand[2]);
invokerLand.addCommand(new command.CmdBreakthrough(airForce));
invokerLand.invoke();
