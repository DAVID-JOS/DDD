import { Meteor } from "meteor/meteor";
import { Wallets } from "./wallets.js";

// ✅ Mining rate: 200 SKD per second
const MINING_RATE = 200;

if (Meteor.isServer) {
  Meteor.setInterval(() => {
    Wallets.forEach(wallet => {
      wallet.balance += MINING_RATE;
    });
    console.log("⛏️ Mining: +200 SKD to all wallets");
  }, 1000); // every 1 second
}
