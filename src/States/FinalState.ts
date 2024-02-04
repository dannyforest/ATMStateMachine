import ATMState from "./ATMState";
import ATMMachine from "../ATMMachine";

export default class FinalState extends ATMState {
    constructor(private atmMachine: ATMMachine) {
        super();
    }

    insertCard(): void {
        console.log("Welcome! Please insert your card.");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }

    ejectCard(): void {
        throw new Error("No card to eject.");
    }

    enterPin(pinEntered: number): void {
        throw new Error("Please insert a card first.");
    }

    requestTransaction(): void {
        throw new Error("Please insert a card first.");
    }
}
