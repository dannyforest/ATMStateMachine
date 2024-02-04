"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATMMachine_1 = __importDefault(require("./src/ATMMachine"));
const atm = new ATMMachine_1.default();
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
