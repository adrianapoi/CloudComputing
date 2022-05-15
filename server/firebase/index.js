var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://juniorvision-52768-default-rtdb.firebaseio.com"
});

module.exports = admin;
