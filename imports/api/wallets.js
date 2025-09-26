import { Meteor } from "meteor/meteor";

// ✅ In-memory wallets
const Wallets = [];

Meteor.methods({
  "wallets.insert"(address, balance = 0) {
    Wallets.push({ address, balance, createdAt: new Date() });
    return true;
  },
  "wallets.get"(address) {
    return Wallets.find(w => w.address === address);
  },
  "wallets.all"() {
    return Wallets;
  },
  "wallets.updateBalance"(address, amount) {
    const wallet = Wallets.find(w => w.address === address);
    if (wallet) {
      wallet.balance += amount;
      return wallet;
    }
    return null;
  }
});

export { Wallets };
