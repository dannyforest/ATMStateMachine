"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMState_1 = __importDefault(require("./ATMState"));
const END_OF_MESSAGE = "until the card has been inserted";
class IdleState extends ATMState_1.default {
    constructor(atmMachine) {
        super();
        this.atmMachine = atmMachine;
    }
    insertCard() {
        console.log("Card inserted");
        this.atmMachine.setState(this.atmMachine.getCardInsertedState());
    }
    ejectCard() {
        throw new Error(this.getErrorMessage('eject card'));
    }
    enterPin(pinEntered) {
        throw new Error(this.getErrorMessage('enter pin'));
    }
    requestTransaction() {
        throw new Error(this.getErrorMessage('request transaction'));
    }
    getErrorMessage(action) {
        return `Cannot ${action} ${END_OF_MESSAGE}.`;
    }
}
exports.default = IdleState;
