import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

const END_OF_MESSAGE: string = "until the card has been inserted";

export default class IdleState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        console.log("Card inserted");
        this.atmMachine.setState(this.atmMachine.getCardInsertedState());
    }

    ejectCard(): void {
        throw new Error(this.getErrorMessage('eject card'));
    }
    enterPin(pinEntered: number): void {
        throw new Error(this.getErrorMessage('enter pin'));
    }
    requestTransaction(): void {
        throw new Error(this.getErrorMessage('request transaction'));
    }

    private getErrorMessage(action: string): string {
        return `Cannot ${action} ${END_OF_MESSAGE}.`;
    }
}
