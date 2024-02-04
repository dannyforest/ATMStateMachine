import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class CashWithdrawalState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        throw new Error("A transaction is currently in progress.");
    }

    ejectCard(): void {
        throw new Error("Please complete the transaction before ejecting the card.");
    }

    enterPin(pinEntered: number): void {
        throw new Error("PIN has already been entered.");
    }

    requestTransaction(): void {
        console.log("Processing cash withdrawal...");
        // Add logic to handle cash withdrawal
        this.atmMachine.setState(this.atmMachine.getTransactionEndState());
    }
}
