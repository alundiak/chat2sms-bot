var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')
var twilio = require('twilio');

var builder = require('botbuilder');
var restify = require('restify');
var BotBrain = require('./brain');

require('dotenv').config()

var app = express();

app.use(express.static(__dirname + '/'));
app.set('port', (process.env.PORT || 1337));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

// app.post('/sms_from_video', function(req, res) {
//   var twilio = require('twilio');
//   var twiml = new twilio.TwimlResponse();
//   twiml.message('The Robots are coming! Head for the hills!');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = twilio.twiml;

  var twimlMsgResp = new twiml.MessagingResponse();

  let attrs = {
    from: process.env.NUMBER_FROM,
    to: process.env.NUMBER_TO_UA
    // to: process.env.NUMBER_TO_PL
    // to: process.env.NUMBER_TO_UA_MOTHER
  };
  const messageBody = 'LUNDIAK test';

  let message = twimlMsgResp.message(attrs, messageBody);

  // console.log(twimlMsgResp);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  
  console.log(twimlMsgResp.toString())

  res.end(twimlMsgResp.toString());
});

//
// Twilio NodeJS Server - potentially needed for TwiML App
// using https://skype2sms.herokuapp.com/sms
//
// http.createServer(app).listen(app.get('port'), function () {
//   console.log("Express server listening on port " + app.get('port'));
// });


//
// Skype Bot Server
// 
var server = restify.createServer({
    name: 'skype2sms-bot',
    version: '1.0.0'
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new BotBrain(connector);

server.post('/api/messages', connector.listen());

server.listen(process.env.PORT || 3978, function() {
    // console.log(server);
    console.log('%s listening to %s', server.name, server.url);
});
