/// <reference path='DB.ts' />
let H : DB.IDbcontext = DB.GenericDBFac.create(DB.HistoryDB);
H.connect();
