"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class CardInsertedState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        throw new Error("You cannot insert another card while one is already inserted.");
    }
    ejectCard() {
        console.log("Card ejected");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }
    enterPin(pinEntered) {
        console.log(`PIN ${pinEntered} entered`);
        // Here, you should add validation for the PIN and then transition to the appropriate state
        // For simplicity, we'll assume the PIN is correct and go to the transaction state
        this.atmMachine.setState(this.atmMachine.getPinEnteredState());
    }
    requestTransaction() {
        throw new Error("Cannot request transaction until PIN has been entered.");
    }
}
exports.default = CardInsertedState;
