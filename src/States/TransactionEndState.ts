import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class TransactionEndState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        throw new Error("A transaction has just been completed.");
    }

    ejectCard(): void {
        console.log("Please take your card.");
        this.atmMachine.setState(this.atmMachine.getCardEjectState());
    }

    enterPin(pinEntered: number): void {
        throw new Error("Transaction is already complete.");
    }

    requestTransaction(): void {
        throw new Error("Transaction is already complete.");
    }
}
