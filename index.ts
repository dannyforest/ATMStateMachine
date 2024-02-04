import ATMMachine from "./src/ATMMachine";

const atm = new ATMMachine();
// atm.ejectCard();  Nous ne pouvons pas éjecter une carte à ce moment car la carte n'a pas été insérée!
atm.printCurrentState();
atm.insertCard();

atm.printCurrentState();
atm.ejectCard();
// atm.enterPin(1234); Nous ne pouvons pas entrer un pin à ce moment car la carte n'ait plus insérée!
atm.printCurrentState();
atm.insertCard();

atm.printCurrentState();
atm.enterPin(1234);

atm.printCurrentState();
atm.requestTransaction(); // Hardcoded: CashWithdrawal

atm.printCurrentState();
atm.requestTransaction(); // Fait la transaction

atm.printCurrentState();
atm.ejectCard();

atm.printCurrentState();