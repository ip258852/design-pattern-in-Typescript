/// <reference path='DB.ts'/>
/// <reference path='abstractFac.ts'/>

let fac = new abstractFac.HistoryDB(DB.STATE.ONLINE);
fac.create();
