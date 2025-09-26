import { Meteor } from "meteor/meteor";

const USD_TO_NGN = 1500; // example rate

Meteor.methods({
  "exchange.usdToNgn"(usdAmount) {
    return usdAmount * USD_TO_NGN;
  },
  "exchange.ngnToUsd"(nairaAmount) {
    return nairaAmount / USD_TO_NGN;
  }
});
