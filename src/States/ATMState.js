"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ATMState interface declares methods for the ATM.
 */
class ATMState {
    /**
     * Retrieves the name of the state.
     *
     * @return {string} The name of the state.
     */
    getStateName() {
        return this.constructor.name;
    }
}
exports.default = ATMState;
