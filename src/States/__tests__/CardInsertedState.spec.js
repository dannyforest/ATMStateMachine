"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMMachine_1 = __importDefault(require("../../ATMMachine"));
const CardInsertedState_1 = __importDefault(require("../CardInsertedState"));
describe('CardInsertedState', () => {
    let atmMachine;
    let cardInsertedState;
    beforeEach(() => {
        atmMachine = new ATMMachine_1.default();
        cardInsertedState = new CardInsertedState_1.default(atmMachine);
    });
    test('insertCard should throw an error when called', () => {
        expect(() => cardInsertedState.insertCard()).toThrow('You cannot insert another card while one is already inserted.');
    });
    test('ejectCard should change the state to idle', () => {
        jest.spyOn(atmMachine, 'setState');
        cardInsertedState.ejectCard();
        expect(atmMachine.setState).toHaveBeenCalledWith(atmMachine.getIdleState());
        expect(atmMachine.setState).toHaveBeenCalledTimes(1);
    });
    test('enterPin should change the state to pinEntered state', () => {
        const pin = 1234;
        jest.spyOn(atmMachine, 'setState');
        cardInsertedState.enterPin(pin);
        expect(atmMachine.setState).toHaveBeenCalledWith(atmMachine.getPinEnteredState());
        expect(atmMachine.setState).toHaveBeenCalledTimes(1);
    });
    test('requestTransaction should throw an error', () => {
        expect(() => cardInsertedState.requestTransaction()).toThrow('Cannot request transaction until PIN has been entered.');
    });
});
