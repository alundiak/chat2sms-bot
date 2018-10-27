//
// Bot Server (v3 API)
// 
module.exports = function() {
    var builder = require('botbuilder');
    var restify = require('restify');
    var BotBrain = require('./smsBot-v3');

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

    server.listen(process.env.PORT, function() {
        console.log('%s listening to %s', server.name, server.url);
    });
}
