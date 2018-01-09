var DB;
(function (DB) {
    var DBContext = /** @class */ (function () {
        function DBContext(_server) {
            this.server = _server;
        }
        DBContext.prototype.connect = function () {
            console.log("Connect to " + this.server);
        };
        return DBContext;
    }());
    DB.DBContext = DBContext;
    var STATE;
    (function (STATE) {
        STATE[STATE["DATAMART"] = 0] = "DATAMART";
        STATE[STATE["HISTORY"] = 1] = "HISTORY";
        STATE[STATE["ONLINE"] = 2] = "ONLINE";
    })(STATE = DB.STATE || (DB.STATE = {}));
})(DB || (DB = {}));
/// <reference path = 'DB.ts'/>
var staticFac;
(function (staticFac) {
    var StaticFac = /** @class */ (function () {
        function StaticFac() {
        }
        StaticFac.create = function (par) {
            switch (par) {
                case DB.STATE.ONLINE:
                    return new DB.DBContext('Online');
                case DB.STATE.HISTORY:
                    return new DB.DBContext('History');
                case DB.STATE.DATAMART:
                    return new DB.DBContext('Datamart');
                default:
                    throw new Error('No DB!!!!');
            }
        };
        return StaticFac;
    }());
    staticFac.StaticFac = StaticFac;
})(staticFac || (staticFac = {}));
/// <reference path = 'DB.ts'/>
/// <reference path = 'staticFac.ts'/>
var a = staticFac.StaticFac.create(DB.STATE.ONLINE);
a.connect();
