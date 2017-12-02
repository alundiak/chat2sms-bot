skype2sms Bot
===

Skype Bot which receives message and sends it via SMS to defined cell phone

## Main data Flow

Skype Bot => Twilio account => ? TwiML App ? => SMS service => send message from SMS service number to hardcoded custom and verified number.

## Tech Stack
- JavaScript, NodeJS
- [Skype Bot Service Twilio Channel](https://docs.microsoft.com/en-us/bot-framework/channel-connect-twilio)
- [Twilio Service](https://www.twilio.com)
- [Twilio Programmable SMS](https://www.twilio.com/docs/quickstart/node/programmable-sms)
- [twilio-node](https://github.com/twilio/twilio-node)
- [TwilioDevEd/sdk-starter-node](https://github.com/TwilioDevEd/sdk-starter-node)
- https://www.twilio.com/docs/tutorials/server-notifications-node-express

## Twilio Steps
- Crate Twilio app
- [Verify numbers (Caller IDs)](https://www.twilio.com/console/phone-numbers/verified)
- Enable regions ([Geo Permissions](https://www.twilio.com/console/sms/settings/geo-permissions))
- Send test message via [Explorer](https://www.twilio.com/console/sms/api-explorer#create-a-message)
- [Test credentials](https://www.twilio.com/console/sms/runtime/test-credentials) to test your Twilio application without connecting to real phones or charging your account.

## Skype bot and Twilio Steps
- Follow [these steps](https://docs.microsoft.com/en-us/bot-framework/channel-connect-twilio)
- Create Skype Bot
- Create MS app (use MS_APP_ID in skype bot config)
- Create [TwiML app on Twilio](https://www.twilio.com/console/phone-numbers/runtime/twiml-apps)
- Use TwiMl app SID
- https://www.twilio.com/docs/glossary/what-is-an-sms-short-message-service

## Skype Bot issues
- Using emulator "ERROR: ChatConnector: receive - no security token sent.". Fixed using APP_ID and APP_PASSWORD in emulator. [Details](https://github.com/Microsoft/BotBuilder/issues/1505#issuecomment-280748691)

## Maybe 

### Use ONLY Twilio ??

### IFTTT
- https://turbofuture.com/internet/IFTTT
- https://ifttt.com/skype
- https://ifttt.com/sms

### Create chatBot with FlowXO + Twilio
- https://support.flowxo.com/article/152-creating-a-twilio-sms-bot

### Other SMS-based bots
- https://chatbottle.co/bots/sms-gratis-for-messenger
- https://chatbottle.co/bots/messenger?q=sms

## Resources

- https://www.twilio.com/sms/pricing/pl
- http://www.businessinsider.com/facebook-slack-skype-snapchat-sms-chatbots-2017-11?IR=T
- https://techcrunch.com/2016/03/30/microsoft-is-bringing-bots-to-skype-and-everywhere-else/

