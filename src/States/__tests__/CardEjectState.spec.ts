import CardEjectState from "../CardEjectState";
import ATMMachine from "../../ATMMachine";


describe('Tests for methods in the CardEjectState class', () => {
    let cardEjectState: CardEjectState;
    let atmMachine: ATMMachine;

    beforeEach(() => {
        atmMachine = new ATMMachine();
        cardEjectState = new CardEjectState(atmMachine);
    });

    describe('insertCard method', () => {
        it('should throw an error "Please take your card." when called', () => {
            expect(() => {
                cardEjectState.insertCard();
            }).toThrowError("Please take your card.");
        });
    });

    describe('enterPin method', () => {
        it('should throw an error "Please take your card." when called', () => {
            expect(() => {
                cardEjectState.enterPin(1234);
            }).toThrowError("Please take your card.");
        });
    });

    describe('ejectCard method', () => {
        it('should not throw an error when called', () => {
            expect(() => {
                cardEjectState.ejectCard();
            }).not.toThrow();
        });
    });

    describe('requestTransaction method', () => {
        it('should throw an error "Please take your card." when called', () => {
            expect(() => {
                cardEjectState.requestTransaction();
            }).toThrowError("Please take your card.");
        });
    });
});