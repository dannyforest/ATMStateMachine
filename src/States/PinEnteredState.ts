import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class PinEnteredState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        throw new Error("A card is already inserted.");
    }

    ejectCard(): void {
        console.log("Card ejected");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }

    enterPin(pinEntered: number): void {
        throw new Error("PIN has already been entered.");
    }

    requestTransaction(): void {
        console.log("Please select a transaction (withdraw, deposit, balance inquiry)");
        // Here, you could transition to different states based on the user's transaction choice.
        // For simplicity, let's assume the user wants to withdraw cash.
        this.atmMachine.setState(this.atmMachine.getCashWithdrawalState());
    }
}
