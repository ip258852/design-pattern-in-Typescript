namespace receiver{
    export interface IReceiver{
        gather() : void ;
        fire() : void ;
        setHighGround() : void ;
        hold() : void ;
        support() : void ;
    }
    export class ReciverArmy implements IReceiver{
        gather() : void {
            console.log('[Army] gatherArmy!');
        }
        fire() : void {
            console.log('[Army] fire!');
        }
        setHighGround() : void {
            console.log('[Army] setHighGround!');
        }
        hold() : void {
            console.log('[Army] hold!');
        }
        support() : void {
            console.log('[Army] support!');
        }
    }
    export class ReciverAirForce implements IReceiver{
        gather() : void {
            console.log('[AirForce] gatherArmy!');
        }
        fire() : void {
            console.log('[AirForce] fire!');
        }
        setHighGround() : void {
            console.log('[AirForce] setHighGround!');
        }
        hold() : void {
            console.log('[AirForce] hold!');
        }
        support() : void {
            console.log('[AirForce] support!');
        }
    }
    export class ReciverNavy implements IReceiver{
        gather() : void {
            console.log('[Navy] gatherArmy!');
        }
        fire() : void {
            console.log('[Navy] fire!');
        }
        setHighGround() : void {
            console.log('[Navy] setHighGround!');
        }
        hold() : void {
            console.log('[Navy] hold!');
        }
        support() : void {
            console.log('[Navy] support!');
        }
    }
}