/// <reference path = 'observer.ts'/>
/// <reference path = 'subject.ts'/>

let pbx : observer.IObserver = new observer.ObserverPbx();
let ms: observer.IObserver = new observer.ObserverMailServer();

let suck : subject.ISubject = new subject.Subjectflow();
suck.attach(pbx);
suck.attach(ms);

suck.notify('Hiiiii','Helllllo');

suck.detach(pbx);
suck.notify('Hiiiii','Helllllo');