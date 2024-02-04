import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class CardEjectState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        throw new Error("Please take your card.");
    }

    ejectCard(): void {
        console.log("Ejecting card...");
        this.atmMachine.setState(this.atmMachine.getFinalState());
    }

    enterPin(pinEntered: number): void {
        throw new Error("Please take your card.");
    }

    requestTransaction(): void {
        throw new Error("Please take your card.");
    }
}
