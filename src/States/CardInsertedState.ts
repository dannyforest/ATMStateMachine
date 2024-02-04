import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class CardInsertedState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        throw new Error("You cannot insert another card while one is already inserted.");
    }

    ejectCard(): void {
        console.log("Card ejected");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }

    enterPin(pinEntered: number): void {
        console.log(`PIN ${pinEntered} entered`);
        // Here, you should add validation for the PIN and then transition to the appropriate state
        // For simplicity, we'll assume the PIN is correct and go to the transaction state
        this.atmMachine.setState(this.atmMachine.getPinEnteredState());
    }

    requestTransaction(): void {
        throw new Error("Cannot request transaction until PIN has been entered.");
    }
}
