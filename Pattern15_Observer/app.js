var observer;
(function (observer) {
    var ObserverPbx = /** @class */ (function () {
        function ObserverPbx() {
        }
        ObserverPbx.prototype.update = function (absence, designee) {
            console.log("[PBX] already tranfer the phone  " + absence + " to " + designee);
        };
        return ObserverPbx;
    }());
    observer.ObserverPbx = ObserverPbx;
    var ObserverMailServer = /** @class */ (function () {
        function ObserverMailServer() {
        }
        ObserverMailServer.prototype.update = function (absence, designee) {
            console.log("[MailServer] already tranfer the phone " + absence + " to " + designee);
        };
        return ObserverMailServer;
    }());
    observer.ObserverMailServer = ObserverMailServer;
})(observer || (observer = {}));
/// <reference path = 'observer.ts' />
var subject;
(function (subject) {
    var Subjectflow = /** @class */ (function () {
        function Subjectflow() {
            this.observers = new Array();
        }
        Subjectflow.prototype.attach = function (ob) {
            if (this.observers.indexOf(ob) === -1) {
                this.observers.push(ob);
            }
        };
        ;
        Subjectflow.prototype.detach = function (ob) {
            if (this.observers.indexOf(ob) !== -1) {
                var index = this.observers.indexOf(ob);
                this.observers.splice(index, 1);
            }
        };
        Subjectflow.prototype.notify = function (absence, designee) {
            this.observers.forEach(function (val) { val.update(absence, designee); });
        };
        return Subjectflow;
    }());
    subject.Subjectflow = Subjectflow;
})(subject || (subject = {}));
/// <reference path = 'observer.ts'/>
/// <reference path = 'subject.ts'/>
var pbx = new observer.ObserverPbx();
var ms = new observer.ObserverMailServer();
var suck = new subject.Subjectflow();
suck.attach(pbx);
suck.attach(ms);
suck.notify('Hiiiii', 'Helllllo');
suck.detach(pbx);
suck.notify('Hiiiii', 'Helllllo');
