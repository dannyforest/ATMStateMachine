"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class FinalState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        console.log("Welcome! Please insert your card.");
        this.atmMachine.setState(this.atmMachine.getIdleState());
    }
    ejectCard() {
        throw new Error("No card to eject.");
    }
    enterPin(pinEntered) {
        throw new Error("Please insert a card first.");
    }
    requestTransaction() {
        throw new Error("Please insert a card first.");
    }
}
exports.default = FinalState;
