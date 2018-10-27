//
// Twilio SDK Version: 2.x 3.x
// 
module.exports = function(smsText) {
  // require the Twilio module and create a REST client 
  const twilio = require('twilio');

  // Twilio Credentials 
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  // const accountSid = process.env.TWILIO_TEST_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  // const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);

  const options = {
    body: smsText,
    from: process.env.NUMBER_FROM,
    to: process.env.NUMBER_TO || process.env.NUMBER_TO_ME_UA
  }
  console.log(options)

  const messageObject = client.messages.create(options, function(err, message) {
    // console.log(message.status);
    if (message && message.sid) {
      console.log(`Twilio message ${message.sid} sent. SMS Status: ${message.status}`)
    }
  });

  // console.log(messageObject)

  return Object.assign({}, options, messageObject);
}
