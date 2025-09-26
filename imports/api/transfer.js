import { Meteor } from "meteor/meteor";
import fetch from "node-fetch";

// ✅ Transfer SKD → NGN via your personal API
Meteor.methods({
  async "transfer.toMoniepoint"(accountNumber, bankCode, amountNGN) {
    const apiUrl = Meteor.settings.private.PERSONAL_API_URL;  // stored in settings.json
    const secret = Meteor.settings.private.PERSONAL_SECRET;   // stored in settings.json

    const res = await fetch(`${apiUrl}/transfers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${secret}`
      },
      body: JSON.stringify({
        account_number: accountNumber,
        bank_code: bankCode,
        amount: amountNGN
      })
    });

    const data = await res.json();
    return data;
  }
});
