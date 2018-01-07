namespace method{
    export interface IPrint{
        printA() : void,
        printB() : void
    }
    export class UsualPrint implements IPrint{
        printA(){
            console.log('usual A print');
        }
        printB(){
            console.log('usual B print');
        }
    }
    export class EmergencyPrint implements IPrint{
        printA(){
            console.log('emergency A print');
        }
        printB(){
            console.log('emergency B print');
        }
    }
}