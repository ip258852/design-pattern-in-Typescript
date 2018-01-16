/// <reference path="JKelements.ts" />
/// <reference path="Role.ts" />
/// <reference path="RoleDetail.ts" />

let Mimi = new RoleDetail.JK(new Role.Student(50,'black',5));
console.log(Mimi.show());
console.log(Mimi.showSex());

let Vivi = new RoleDetail.Dancer(new Role.HotSister(18,18,null));
console.log(Vivi.showAge());
console.log(Vivi.showSex());

let Pipi = new RoleDetail.Dancer(new Role.HotSister(18,18,()=>`I don't know?`));
console.log(Pipi.showAge());
console.log(Pipi.showSex());