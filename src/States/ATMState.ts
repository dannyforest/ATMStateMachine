/**
 * The ATMState interface declares methods for the ATM.
 */
export default abstract class ATMState {
    /**
     * Inserts a card into the card slot.
     *
     * @returns {void}
     */
    abstract insertCard(): void;

    /**
     * Ejects the card from the card slot.
     *
     * @returns {void} This method does not return anything.
     */
    abstract ejectCard(): void;

    /**
     * Enter PIN method.
     *
     * @param {number} pinEntered - The PIN entered by the user.
     * @return {void}
     */
    abstract enterPin(pinEntered: number): void;

    /**
     * Requests a transaction from the server.
     *
     * @return {void}
     */
    abstract requestTransaction(): void;

    /**
     * Retrieves the name of the state.
     *
     * @return {string} The name of the state.
     */
    getStateName(): string {
        return this.constructor.name;
    }
}
