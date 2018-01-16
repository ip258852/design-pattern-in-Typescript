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
        function abstractFac() {
        }
        return abstractFac;
    }());
    var HistoryDB = /** @class */ (function (_super) {
        __extends(HistoryDB, _super);
        function HistoryDB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HistoryDB.prototype.create = function () {
            return new DB.DBContext('History');
        };
        return HistoryDB;
    }(abstractFac));
    abstractFac_1.HistoryDB = HistoryDB;
    var ONLINEDB = /** @class */ (function (_super) {
        __extends(ONLINEDB, _super);
        function ONLINEDB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ONLINEDB.prototype.create = function () {
            return new DB.DBContext('History');
        };
        return ONLINEDB;
    }(abstractFac));
    abstractFac_1.ONLINEDB = ONLINEDB;
    var DATAMARTDB = /** @class */ (function (_super) {
        __extends(DATAMARTDB, _super);
        function DATAMARTDB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DATAMARTDB.prototype.create = function () {
            return new DB.DBContext('History');
        };
        return DATAMARTDB;
    }(abstractFac));
    abstractFac_1.DATAMARTDB = DATAMARTDB;
})(abstractFac || (abstractFac = {}));
/// <reference path='DB.ts'/>
/// <reference path='abstractFac.ts'/>
var his = new abstractFac.DATAMARTDB();
his.create().connect();
