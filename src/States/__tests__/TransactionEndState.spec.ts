import ATMMachine from "../../ATMMachine";
import TransactionEndState from "../TransactionEndState";

describe('TransactionEndState', () => {
    let atmMachine: ATMMachine;
    let transactionEndState: TransactionEndState;

    beforeEach(() => {
        atmMachine = new ATMMachine();
        transactionEndState = new TransactionEndState(atmMachine);
        jest.spyOn(atmMachine, 'setState');
    });

    describe('insertCard', () => {
        it('should throw an error', () => {
            expect(() => {
                transactionEndState.insertCard();
            }).toThrowError("A transaction has just been completed.");
        });
    });

    describe('ejectCard', () => {
        it('should transition to CardEjectState', () => {
            transactionEndState.ejectCard();
            expect(atmMachine.setState).toHaveBeenCalledWith(atmMachine.getCardEjectState());
        });
    });

    describe('enterPin', () => {
        it('should throw an error', () => {
            expect(() => {
                transactionEndState.enterPin(1234);
            }).toThrowError("Transaction is already complete.");
        });
    });

    describe('requestTransaction', () => {
        it('should throw an error', () => {
            expect(() => {
                transactionEndState.requestTransaction();
            }).toThrowError("Transaction is already complete.");
        });
    });
});