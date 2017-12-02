skype2sms Bot
===

Skype Bot which receives message and sends it via SMS to defined cell phone

## Tech Stack
- [Skype Bot Service Twilio Channel](https://docs.microsoft.com/en-us/bot-framework/channel-connect-twilio)
- [Twilio Service](https://www.twilio.com)
- NodeJS
- [twilio-node](https://github.com/twilio/twilio-node)
- [TwilioDevEd/sdk-starter-node](https://github.com/TwilioDevEd/sdk-starter-node)

## Maybe IFTTT
- https://turbofuture.com/internet/IFTTT
- https://ifttt.com/skype
- https://ifttt.com/sms

## Flow

Skype Bot => Twilio account => ? TwiML App ? => SMS service => send message from/to number


## Twilio Steps
- Crate Twilio app
- [Verify numbers (Caller IDs)](https://www.twilio.com/console/phone-numbers/verified)
- Enable regions ([Geo Permissions](https://www.twilio.com/console/sms/settings/geo-permissions))
- Send test message via [Explorer](https://www.twilio.com/console/sms/api-explorer#create-a-message)
- btw, there are [test credentials](https://www.twilio.com/console/sms/runtime/test-credentials) to test your Twilio application without connecting to real phones or charging your account.

## Skype bot and Twilio Steps
- Follow [these steps](https://docs.microsoft.com/en-us/bot-framework/channel-connect-twilio)
- Create Skype Bot
- Create MS app (use MS_APP_ID in skype bot config)
- Create [TwiML app on Twilio](https://www.twilio.com/console/phone-numbers/runtime/twiml-apps)
- Use TwiMl app SID

## Resources
- https://www.twilio.com/docs/quickstart/node/programmable-sms
- https://www.twilio.com/sms/pricing/pl
- http://www.businessinsider.com/facebook-slack-skype-snapchat-sms-chatbots-2017-11?IR=T

