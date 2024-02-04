"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class TransactionEndState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        throw new Error("A transaction has just been completed.");
    }
    ejectCard() {
        console.log("Please take your card.");
        this.atmMachine.setState(this.atmMachine.getCardEjectState());
    }
    enterPin(pinEntered) {
        throw new Error("Transaction is already complete.");
    }
    requestTransaction() {
        throw new Error("Transaction is already complete.");
    }
}
exports.default = TransactionEndState;
