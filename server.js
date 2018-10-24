// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//
const mailgun = require("mailgun-js");
const api_key = process.env.MAIN_KEY;

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/contact", function (req, res) {


const DOMAIN = 'YOUR_DOMAIN_NAME';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

let data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});