import ATMMachine from "./ATMMachine";
import IdleState from "./States/IdleState";
import CardInsertedState from "./States/CardInsertedState";
import PinEnteredState from "./States/PinEnteredState";
import CashWithdrawalState from "./States/CashWithdrawalState";
import TransactionEndState from "./States/TransactionEndState";
import CardEjectState from "./States/CardEjectState";
import FinalState from "./States/FinalState";

describe('ATMMachine Class', () => {
    let atmMachine: ATMMachine;

    beforeEach(() => {
        atmMachine = new ATMMachine();
    });

    describe('getState method', () => {
        
        it('should return current state initialized to IdleState', () => {
            expect(atmMachine.getState()).toBeInstanceOf(IdleState);
        });

        it('should reflect the updated state when setState is called', () => {
            const cardInsertedState = new CardInsertedState(atmMachine);
            atmMachine.setState(cardInsertedState);
            expect(atmMachine.getState()).toBe(cardInsertedState);
        });
    });

    describe('getCardInsertedState method', () => {
        
        it('should return CardInsertedState', () => {
            expect(atmMachine.getCardInsertedState()).toBeInstanceOf(CardInsertedState);
        });
    });

    describe('getPinEnteredState method', () => {

        it('should return PinEnteredState', () => {
            expect(atmMachine.getPinEnteredState()).toBeInstanceOf(PinEnteredState);
        });
    });

    describe('getCashWithdrawalState method', () => {

        it('should return CashWithdrawalState', () => {
            expect(atmMachine.getCashWithdrawalState()).toBeInstanceOf(CashWithdrawalState);
        });
    });

    describe('getTransactionEndState method', () => {

        it('should return TransactionEndState', () => {
            expect(atmMachine.getTransactionEndState()).toBeInstanceOf(TransactionEndState);
        });
    });

    describe('getCardEjectState method', () => {

        it('should return CardEjectState', () => {
            expect(atmMachine.getCardEjectState()).toBeInstanceOf(CardEjectState);
        });
    });

    describe('getFinalState method', () => {

        it('should return FinalState', () => {
            expect(atmMachine.getFinalState()).toBeInstanceOf(FinalState);
        });
    });
    
    it('should return IdleState after card is ejected', () => {
        atmMachine.setState(new CardInsertedState(atmMachine));
        atmMachine.ejectCard();
        expect(atmMachine.getState()).toBeInstanceOf(IdleState);
    });
});