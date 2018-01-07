/// <reference path="IHandler.ts" />
/// <reference path="Handler.ts" />

let data = {
    lan   : "JP",
    name  : "John doe"
}


let app = new Handler.header(data);
let US  = new Handler.USHandler(data);
let TW  = new Handler.TWHandler(data);

app.next = US;
US.next  = TW; 
console.log(app.fix());


