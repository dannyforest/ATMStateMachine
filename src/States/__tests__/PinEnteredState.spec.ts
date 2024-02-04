import ATMMachine from "../../ATMMachine";
import PinEnteredState from "../PinEnteredState";


describe('PinEnteredState', () => {
  let atmMachine: ATMMachine;
  let state: PinEnteredState;

  beforeEach(() => {
    atmMachine = new ATMMachine(); // Assuming ATMMachine constructor have no parameters or they are optional
    state = new PinEnteredState(atmMachine);
  });

  describe('insertCard method', () => {
    it('throws an error when a card is already inserted', () => {
      expect(() => {
        state.insertCard();
      }).toThrowError("A card is already inserted.");
    });
  });

  describe('ejectCard method', () => {
    it('does not throw any error', () => {
      expect(() => {
        state.ejectCard();
      }).not.toThrow();
    });
  });

  describe('enterPin method', () => {
    it('throws an error because PIN has already been entered', () => {
      expect(() => {
        state.enterPin(1234);
      }).toThrowError("PIN has already been entered.");
    });
  });

  describe('requestTransaction method', () => {
    it('does not throw any error', () => {
      expect(() => {
        state.requestTransaction();
      }).not.toThrow();
    });
  });
});