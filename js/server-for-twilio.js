//
// Twilio Server - potentially needed for TwiML App
// using https://skype2sms.herokuapp.com/sms
//
module.exports = function() {
    // const path = require('path');
    var http = require('http');
    var express = require('express');
    var bodyParser = require('body-parser')
    var twilio = require('twilio');

    var twiml = twilio.twiml;
    var app = express();

    app.use(express.static(__dirname + '/../'));
    app.set('port', (process.env.PORT || 1337));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.get('/', function(request, response) {
        response.sendFile(path.join(__dirname + '/index.html'));
    });

    // https://www.twilio.com/docs/quickstart/node/programmable-sms
    // app.post('/sms_from_video', function(req, res) {
    //   var twilio = require('twilio');
    //   var twiml = new twilio.TwimlResponse();
    //   twiml.message('The Robots are coming! Head for the hills!');
    //   res.writeHead(200, {'Content-Type': 'text/xml'});
    //   res.end(twiml.toString());
    // });

    app.post('/sms', function(req, res) {
        var twimlMsgResp = new twiml.MessagingResponse();

        let attrs = {
            from: process.env.NUMBER_FROM,
            to: process.env.NUMBER_TO
        };

        const messageBody = 'LUNDIAK test';

        let message = twimlMsgResp.message(attrs, messageBody);

        // console.log(twimlMsgResp);

        res.writeHead(200, {
            'Content-Type': 'text/xml'
        });

        console.log(twimlMsgResp.toString())

        res.end(twimlMsgResp.toString());
    });

    http.createServer(app).listen(app.get('port'), function() {
        console.log("Express server listening on port " + app.get('port'));
    });
}
