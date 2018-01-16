var DB;
(function (DB) {
    var MartDB = /** @class */ (function () {
        function MartDB() {
            this.server = 'DataMart';
            this.connectString = 'DataMart connection string ';
        }
        MartDB.prototype.connect = function () {
            console.log("connect to " + this.server);
        };
        return MartDB;
    }());
    DB.MartDB = MartDB;
    var HistoryDB = /** @class */ (function () {
        function HistoryDB() {
            this.server = 'History';
            this.connectString = 'History connection string ';
        }
        HistoryDB.prototype.connect = function () {
            console.log("connect to " + this.server);
        };
        return HistoryDB;
    }());
    DB.HistoryDB = HistoryDB;
    var OnlineDB = /** @class */ (function () {
        function OnlineDB() {
            this.server = 'Online';
            this.connectString = 'Online connection string ';
        }
        OnlineDB.prototype.connect = function () {
            console.log("connect to " + this.server);
        };
        return OnlineDB;
    }());
    DB.OnlineDB = OnlineDB;
    var GenericDBFac = /** @class */ (function () {
        function GenericDBFac() {
        }
        // 給new Object 一個保證
        // 保證我一定建立T的實作class
        GenericDBFac.create = function (type) {
            return new type();
        };
        return GenericDBFac;
    }());
    DB.GenericDBFac = GenericDBFac;
})(DB || (DB = {}));
/// <reference path='DB.ts' />
var H = DB.GenericDBFac.create(DB.HistoryDB);
H.connect();
