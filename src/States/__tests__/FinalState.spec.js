"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMMachine_1 = __importDefault(require("../../ATMMachine"));
const FinalState_1 = __importDefault(require("../FinalState"));
describe('FinalState', () => {
    let atmMachine;
    let finalState;
    beforeAll(() => {
        atmMachine = new ATMMachine_1.default();
        finalState = new FinalState_1.default(atmMachine);
    });
    describe('insertCard', () => {
        it('should set state to Idle', () => {
            finalState.insertCard();
            expect(atmMachine.getState()).toBe(atmMachine.getIdleState());
        });
    });
    describe('ejectCard', () => {
        it('should throw an error', () => {
            expect(() => finalState.ejectCard()).toThrow(Error);
        });
    });
    describe('enterPin', () => {
        it('should throw an error', () => {
            expect(() => finalState.enterPin(1234)).toThrow(Error);
        });
    });
    describe('requestTransaction', () => {
        it('should throw an error', () => {
            expect(() => finalState.requestTransaction()).toThrow(Error);
        });
    });
});
