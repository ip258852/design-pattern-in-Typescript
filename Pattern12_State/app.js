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
/// <reference path = 'state.ts'/>
var context;
(function (context_1) {
    var context = /** @class */ (function () {
        function context() {
            this.state = new state.StateTodo();
        }
        context.prototype.action = function () {
            this.state.action(this);
        };
        return context;
    }());
    context_1.context = context;
})(context || (context = {}));
/// <reference path ='context.ts'/>
var state;
(function (state) {
    var State = /** @class */ (function () {
        function State() {
        }
        return State;
    }());
    state.State = State;
    var StateTodo = /** @class */ (function (_super) {
        __extends(StateTodo, _super);
        function StateTodo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateTodo.prototype.action = function (context) {
            console.log('today is good day to todo!');
            context.state = new StateWorking();
        };
        return StateTodo;
    }(State));
    state.StateTodo = StateTodo;
    var StateWorking = /** @class */ (function (_super) {
        __extends(StateWorking, _super);
        function StateWorking() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateWorking.prototype.action = function (context) {
            console.log('today is good day to Working!');
            context.state = new StateTesting();
        };
        return StateWorking;
    }(State));
    state.StateWorking = StateWorking;
    var StateTesting = /** @class */ (function (_super) {
        __extends(StateTesting, _super);
        function StateTesting() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateTesting.prototype.action = function (context) {
            console.log('today is good day to Test!');
            context.state = new StateDone();
        };
        return StateTesting;
    }(State));
    state.StateTesting = StateTesting;
    var StateDone = /** @class */ (function (_super) {
        __extends(StateDone, _super);
        function StateDone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StateDone.prototype.action = function (context) {
            console.log('today is good day to Done!');
            context.state = null;
        };
        return StateDone;
    }(State));
    state.StateDone = StateDone;
})(state || (state = {}));
/// <reference path = 'state.ts'/>
/// <reference path = 'context.ts'/>
var c = new context.context();
while (c.state !== null) {
    c.action();
}
