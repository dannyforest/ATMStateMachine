"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class PinEnteredState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        throw new Error("A card is already inserted.");
    }
    ejectCard() {
        console.log("Card ejected");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }
    enterPin(pinEntered) {
        throw new Error("PIN has already been entered.");
    }
    requestTransaction() {
        console.log("Please select a transaction (withdraw, deposit, balance inquiry)");
        // Here, you could transition to different states based on the user's transaction choice.
        // For simplicity, let's assume the user wants to withdraw cash.
        this.atmMachine.setState(this.atmMachine.getCashWithdrawalState());
    }
}
exports.default = PinEnteredState;
