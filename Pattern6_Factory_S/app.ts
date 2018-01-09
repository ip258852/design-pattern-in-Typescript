/// <reference path = 'DB.ts'/>
/// <reference path = 'staticFac.ts'/>

let  a =  staticFac.StaticFac.create(DB.STATE.ONLINE);
a.connect();