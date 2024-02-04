"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class CashWithdrawalState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        throw new Error("A transaction is currently in progress.");
    }
    ejectCard() {
        throw new Error("Please complete the transaction before ejecting the card.");
    }
    enterPin(pinEntered) {
        throw new Error("PIN has already been entered.");
    }
    requestTransaction() {
        console.log("Processing cash withdrawal...");
        // Add logic to handle cash withdrawal
        this.atmMachine.setState(this.atmMachine.getTransactionEndState());
    }
}
exports.default = CashWithdrawalState;
