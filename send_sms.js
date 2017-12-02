//
// SDK Version: 2.x 3.x
// 
 
require('dotenv').config()

// Twilio Credentials 
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_LIVE_AUTH_TOKEN;
// var authToken = process.env.TWILIO_TEST_AUTH_TOKEN;

//require the Twilio module and create a REST client 
var twilio = require('twilio');

var client = twilio(accountSid, authToken);

var options = {
    body: "Test from node send_sms.js",
    from: process.env.NUMBER_FROM,
    // to: process.env.NUMBER_TO_PL
    to: process.env.NUMBER_TO_UA
    // to: process.env.NUMBER_TO_UA_MOTHER
}
console.log(options)

client.messages.create(options, function(err, message) {

    if(message.sid){
    	console.log(`Message ${message.sid} sent. Status: ${message.status}`)
    }
    
    console.log(message);
});
