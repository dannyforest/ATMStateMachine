import ATMMachine from "../../ATMMachine";
import FinalState from "../FinalState";

describe('FinalState', () => {
    let atmMachine: ATMMachine;
    let finalState: FinalState;

    beforeAll(() => {
        atmMachine = new ATMMachine();
        finalState = new FinalState(atmMachine);
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