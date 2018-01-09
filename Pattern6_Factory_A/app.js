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
/// <reference path='DB.ts'/>
var abstractFac;
(function (abstractFac_1) {
    var abstractFac = /** @class */ (function () {
        function abstractFac(_server) {
            this.server = _server;
        }
        return abstractFac;
    }());
    var HistoryDB = /** @class */ (function (_super) {
        __extends(HistoryDB, _super);
        function HistoryDB(_server) {
            return _super.call(this, _server) || this;
        }
        HistoryDB.prototype.create = function () {
            console.log("create " + this.server + ".");
        };
        return HistoryDB;
    }(abstractFac));
    abstractFac_1.HistoryDB = HistoryDB;
    var DatamartDB = /** @class */ (function (_super) {
        __extends(DatamartDB, _super);
        function DatamartDB(_server) {
            return _super.call(this, _server) || this;
        }
        DatamartDB.prototype.create = function () {
            console.log("create " + this.server + ".");
        };
        return DatamartDB;
    }(abstractFac));
    abstractFac_1.DatamartDB = DatamartDB;
    var OnlineDB = /** @class */ (function (_super) {
        __extends(OnlineDB, _super);
        function OnlineDB(_server) {
            return _super.call(this, _server) || this;
        }
        OnlineDB.prototype.create = function () {
            console.log("create " + this.server + ".");
        };
        return OnlineDB;
    }(abstractFac));
    abstractFac_1.OnlineDB = OnlineDB;
})(abstractFac || (abstractFac = {}));
/// <reference path='DB.ts'/>
/// <reference path='abstractFac.ts'/>
var fac = new abstractFac.HistoryDB(DB.STATE.ONLINE);
fac.create();
