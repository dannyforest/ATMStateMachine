"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
class CardEjectState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        throw new Error("Please take your card.");
    }
    ejectCard() {
        console.log("Ejecting card...");
        this.atmMachine.setState(this.atmMachine.getFinalState());
    }
    enterPin(pinEntered) {
        throw new Error("Please take your card.");
    }
    requestTransaction() {
        throw new Error("Please take your card.");
    }
}
exports.default = CardEjectState;
