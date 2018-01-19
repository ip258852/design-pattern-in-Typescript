namespace observer{
    export interface IObserver{
        update(absence : string , designee : string) : void ;
    }
    export class ObserverPbx implements IObserver {
        update(absence : string , designee : string) : void {
            console.log(`[PBX] 已轉指定轉接 ${absence}的來電給 ${designee}`);
        }
    }
    export class ObserverMailServer implements IObserver {
        update(absence : string , designee : string) : void {
            console.log(`[MailServer] 已轉指定轉接 ${absence}的來電給 ${designee}`);
        }
    }
}