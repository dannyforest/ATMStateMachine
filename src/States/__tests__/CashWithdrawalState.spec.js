"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMMachine_1 = __importDefault(require("../../ATMMachine"));
const CashWithdrawalState_1 = __importDefault(require("../CashWithdrawalState"));
describe('CashWithdrawalState', () => {
    let atmMachine;
    let cashWithdrawalState;
    beforeEach(() => {
        atmMachine = new ATMMachine_1.default();
        cashWithdrawalState = new CashWithdrawalState_1.default(atmMachine);
    });
    describe('insertCard', () => {
        it('should throw an error when insertCard is called', () => {
            expect(() => cashWithdrawalState.insertCard()).toThrow("A transaction is currently in progress.");
        });
    });
    describe('ejectCard', () => {
        it('should throw an error when ejectCard is called', () => {
            expect(() => cashWithdrawalState.ejectCard()).toThrow("Please complete the transaction before ejecting the card.");
        });
    });
    describe('enterPin', () => {
        it('should throw an error when a PIN is entered', () => {
            expect(() => cashWithdrawalState.enterPin(1234)).toThrow("PIN has already been entered.");
        });
    });
    describe('requestTransaction', () => {
        it('should throw no error', () => {
            expect(() => cashWithdrawalState.requestTransaction()).not.toThrow();
        });
    });
});
