namespace observer{
    export interface IObserver{
        update(absence : string , designee : string) : void ;
    }
    export class ObserverPbx implements IObserver {
        update(absence : string , designee : string) : void {
            console.log(`[PBX] already tranfer the phone  ${absence} to ${designee}`);
        }
    }
    export class ObserverMailServer implements IObserver {
        update(absence : string , designee : string) : void {
            console.log(`[MailServer] already tranfer the phone ${absence} to ${designee}`);
        }
    }
}