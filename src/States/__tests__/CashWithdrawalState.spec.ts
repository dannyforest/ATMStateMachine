import ATMMachine from "../../ATMMachine";
import CashWithdrawalState from "../CashWithdrawalState";

describe('CashWithdrawalState', () => {
  
  let atmMachine: ATMMachine;
  let cashWithdrawalState: CashWithdrawalState;

  beforeEach(() => {
    atmMachine = new ATMMachine();
    cashWithdrawalState = new CashWithdrawalState(atmMachine);
  });

  describe('insertCard', () => {
    it('should throw an error when insertCard is called', () => {
      expect(() => cashWithdrawalState.insertCard()).toThrow("A transaction is currently in progress.");
    });
  });

  describe('ejectCard', () => {
    it('should throw an error when ejectCard is called', () => {
      expect(() => cashWithdrawalState.ejectCard()).toThrow("Please complete the transaction before ejecting the card.");
    });
  });

  describe('enterPin', () => {
    it('should throw an error when a PIN is entered', () => {
      expect(() => cashWithdrawalState.enterPin(1234)).toThrow("PIN has already been entered.");
    });
  });

  describe('requestTransaction', () => {
    it('should throw no error', () => {
      expect(() => cashWithdrawalState.requestTransaction()).not.toThrow();
    });
  });

});