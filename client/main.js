import { Meteor } from "meteor/meteor";
import "./main.html";

Template.body.events({
  "click #mine"() {
    Meteor.call("wallets.all", (err, res) => {
      if (err) {
        alert("❌ Error: " + err);
      } else {
        document.getElementById("output").innerText = JSON.stringify(res, null, 2);
      }
    });
  }
});
