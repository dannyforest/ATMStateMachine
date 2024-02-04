import ATMState from "./States/ATMState";
import IdleState from "./States/IdleState";
import CardInsertedState from "./States/CardInsertedState";
import PinEnteredState from "./States/PinEnteredState";
import CashWithdrawalState from "./States/CashWithdrawalState";
import TransactionEndState from "./States/TransactionEndState";
import CardEjectState from "./States/CardEjectState";
import FinalState from "./States/FinalState";

/**
 * Represents an ATM machine.
 */
export default class ATMMachine {
    private currentState: ATMState;

    /**
     * Initializes the states of the ATM machine and sets the initial state.
     *
     * @constructor
     */
    constructor() {
        this.idleState = new IdleState(this);
        this.cardInsertedState = new CardInsertedState(this);
        this.pinEnteredState = new PinEnteredState(this);
        this.cashWithdrawalState = new CashWithdrawalState(this);
        this.transactionEndState = new TransactionEndState(this);
        this.cardEjectState = new CardEjectState(this);
        this.finalState = new FinalState(this);
        // initialize other states

        this.currentState = this.idleState; // Initial state
    }

    /**
     * Retrieves the current state of the ATM.
     *
     * @returns {ATMState} The current state of the ATM.
     */
    getState(): ATMState {
        return this.currentState;
    }

    /**
     * Updates the current state of the ATM.
     *
     * @param {ATMState} state - The new state to set.
     * @return {void}
     */
    setState(state: ATMState): void {
        this.currentState = state;
    }

    /**
     * Gets the idle state of the ATM.
     *
     * @returns {ATMState} The idle state of the ATM.
     */
    getIdleState(): ATMState {
        return this.idleState;
    }

    /**
     * Retrieves the current state of the inserted card.
     *
     * @returns {ATMState} The state of the inserted card.
     */
    getCardInsertedState(): ATMState {
        return this.cardInsertedState;
    }

    /**
     * Retrieves the current pin entered state of the ATM.
     *
     * @return {ATMState} The pin entered state of the ATM.
     */
    getPinEnteredState(): ATMState {
        return this.pinEnteredState;
    }

    /**
     * Retrieves the current state of cash withdrawal for the ATM.
     *
     * @returns {ATMState} The current state of cash withdrawal.
     */
    getCashWithdrawalState(): ATMState {
        return this.cashWithdrawalState;
    }

    /**
     * Retrieves the end state of the transaction.
     *
     * @return {ATMState} The end state of the transaction.
     */
    getTransactionEndState(): ATMState {
        return this.transactionEndState;
    }

    /**
     * Retrieves the current state of card ejection for the ATM.
     *
     * @return {ATMState} The current state of card ejection.
     */
    getCardEjectState(): ATMState {
        return this.cardEjectState;
    }

    /**
     * Retrieves the final state of the ATM.
     *
     * @returns {ATMState} The final state of the ATM.
     */
    getFinalState(): ATMState {
        return this.finalState;
    }

    /**
     * Inserts a card into the current state.
     *
     * @returns {void}
     */
    insertCard(): void {
        this.currentState.insertCard();
    }

    /**
     * Ejects the card from the current state.
     *
     * @return {void}
     */
    ejectCard(): void {
        this.currentState.ejectCard();
    }

    /**
     * Allows the user to enter a PIN.
     *
     * @param {number} pinEntered - The PIN entered by the user.
     *
     * @returns {void}
     */
    enterPin(pinEntered: number): void {
        this.currentState.enterPin(pinEntered);
    }

    /**
     * Requests a transaction by invoking the `requestTransaction` method of the current state.
     *
     * @returns {void}
     */
    requestTransaction(): void {
        this.currentState.requestTransaction();
    }

    /**
     * Prints the current state of the application.
     *
     * @returns {void}
     */
    printCurrentState(): void {
        console.log(`Current state: ${this.currentState.getStateName()}`);
    }

    private readonly idleState: ATMState;
    private readonly cardInsertedState: ATMState;
    private readonly pinEnteredState: ATMState;
    private readonly cashWithdrawalState: ATMState;
    private readonly transactionEndState: ATMState;
    private readonly cardEjectState: ATMState;
    private readonly finalState: ATMState;
}
