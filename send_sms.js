module.exports = function(smsText) {
	require('dotenv').config()

	//
	// Twilio SDK Version: 2.x 3.x
	// 
	// require the Twilio module and create a REST client 
	var twilio = require('twilio');

	// Twilio Credentials 
	var accountSid = process.env.TWILIO_ACCOUNT_SID;
	var authToken = process.env.TWILIO_AUTH_TOKEN;
	// var authToken = process.env.TWILIO_TEST_AUTH_TOKEN;

	var client = twilio(accountSid, authToken);

	var options = {
	    body: smsText,
	    from: process.env.NUMBER_FROM,
	    to: process.env.NUMBER_TO_UA
	    // to: process.env.NUMBER_TO_PL
	    // to: process.env.NUMBER_TO_UA_MOTHER
	}
	console.log(options)

	var messageObject = client.messages.create(options, function(err, message) {
		console.log(message.status);
	    if(message.sid){
	    	console.log(`Twilio message ${message.sid} sent. SMS Status: ${message.status}`)
	    }
	});

	console.log(messageObject)

	return Object.assign({}, options, messageObject);
}