import { Meteor } from "meteor/meteor";
import "../imports/api/wallets.js";
import "../imports/api/mining.js";
import "../imports/api/transfer.js";
import "../imports/api/exchange.js";

Meteor.startup(() => {
  console.log("🚀 Mine App running only on Meteor.js");
  console.log("✅ Mining: 200 SKD/sec active");
});
