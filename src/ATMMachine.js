"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IdleState_1 = __importDefault(require("./States/IdleState"));
const CardInsertedState_1 = __importDefault(require("./States/CardInsertedState"));
const PinEnteredState_1 = __importDefault(require("./States/PinEnteredState"));
const CashWithdrawalState_1 = __importDefault(require("./States/CashWithdrawalState"));
const TransactionEndState_1 = __importDefault(require("./States/TransactionEndState"));
const CardEjectState_1 = __importDefault(require("./States/CardEjectState"));
const FinalState_1 = __importDefault(require("./States/FinalState"));
/**
 * Represents an ATM machine.
 */
class ATMMachine {
    /**
     * Initializes the states of the ATM machine and sets the initial state.
     *
     * @constructor
     */
    constructor() {
        this.idleState = new IdleState_1.default(this);
        this.cardInsertedState = new CardInsertedState_1.default(this);
        this.pinEnteredState = new PinEnteredState_1.default(this);
        this.cashWithdrawalState = new CashWithdrawalState_1.default(this);
        this.transactionEndState = new TransactionEndState_1.default(this);
        this.cardEjectState = new CardEjectState_1.default(this);
        this.finalState = new FinalState_1.default(this);
        // initialize other states
        this.currentState = this.idleState; // Initial state
    }
    /**
     * Retrieves the current state of the ATM.
     *
     * @returns {ATMState} The current state of the ATM.
     */
    getState() {
        return this.currentState;
    }
    /**
     * Updates the current state of the ATM.
     *
     * @param {ATMState} state - The new state to set.
     * @return {void}
     */
    setState(state) {
        this.currentState = state;
    }
    /**
     * Gets the idle state of the ATM.
     *
     * @returns {ATMState} The idle state of the ATM.
     */
    getIdleState() {
        return this.idleState;
    }
    /**
     * Retrieves the current state of the inserted card.
     *
     * @returns {ATMState} The state of the inserted card.
     */
    getCardInsertedState() {
        return this.cardInsertedState;
    }
    /**
     * Retrieves the current pin entered state of the ATM.
     *
     * @return {ATMState} The pin entered state of the ATM.
     */
    getPinEnteredState() {
        return this.pinEnteredState;
    }
    /**
     * Retrieves the current state of cash withdrawal for the ATM.
     *
     * @returns {ATMState} The current state of cash withdrawal.
     */
    getCashWithdrawalState() {
        return this.cashWithdrawalState;
    }
    /**
     * Retrieves the end state of the transaction.
     *
     * @return {ATMState} The end state of the transaction.
     */
    getTransactionEndState() {
        return this.transactionEndState;
    }
    /**
     * Retrieves the current state of card ejection for the ATM.
     *
     * @return {ATMState} The current state of card ejection.
     */
    getCardEjectState() {
        return this.cardEjectState;
    }
    /**
     * Retrieves the final state of the ATM.
     *
     * @returns {ATMState} The final state of the ATM.
     */
    getFinalState() {
        return this.finalState;
    }
    /**
     * Inserts a card into the current state.
     *
     * @returns {void}
     */
    insertCard() {
        this.currentState.insertCard();
    }
    /**
     * Ejects the card from the current state.
     *
     * @return {void}
     */
    ejectCard() {
        this.currentState.ejectCard();
    }
    /**
     * Allows the user to enter a PIN.
     *
     * @param {number} pinEntered - The PIN entered by the user.
     *
     * @returns {void}
     */
    enterPin(pinEntered) {
        this.currentState.enterPin(pinEntered);
    }
    /**
     * Requests a transaction by invoking the `requestTransaction` method of the current state.
     *
     * @returns {void}
     */
    requestTransaction() {
        this.currentState.requestTransaction();
    }
    /**
     * Prints the current state of the application.
     *
     * @returns {void}
     */
    printCurrentState() {
        console.log(`Current state: ${this.currentState.getStateName()}`);
    }
}
exports.default = ATMMachine;
