//
// Bot Server (v4 API)
// 
const path = require('path');
const restify = require('restify');
const { BotFrameworkAdapter, MemoryStorage, ConversationState } = require('botbuilder');
const { BotConfiguration } = require('botframework-config');
const { MyBot } = require('./smsBot-v4');

const ENV_FILE = path.join(__dirname, '../', '.env');
const env = require('dotenv').config({path: ENV_FILE});
const DEV_ENVIRONMENT = 'development'; // TODO
const BOT_CONFIGURATION = (process.env.NODE_ENV || DEV_ENVIRONMENT);

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT, function () {
    console.log(`\n${server.name} listening to ${server.url}`);
    console.log(`\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator`);
    console.log(`\nTo talk to your bot, open *.bot file in the Emulator`);
});

const BOT_FILE = path.join(__dirname, '../', (process.env.botFilePath || ''));

console.log(BOT_FILE);

let botConfig;
try {
    botConfig = BotConfiguration.loadSync(BOT_FILE, process.env.botFileSecret);
} catch (err) {
    console.error(`\nError reading bot file. Please ensure you have valid botFilePath and botFileSecret set for your environment.`);
    console.error(`\n - The botFileSecret is available under appsettings for your Azure Bot Service bot.`);
    console.error(`\n - If you are running this bot locally, consider adding a .env file with botFilePath and botFileSecret.\n\n`);
    process.exit();
}

const endpointConfig = botConfig.findServiceByNameOrId(BOT_CONFIGURATION);
console.log(endpointConfig);

// localhost Bot Emulator works ONLY, if appId and appPassword line are commented.
// And if ngrok URL needed to use from Skype/Telegram, then appId and appPassword MUST be provided.
const adapter = new BotFrameworkAdapter({
    appId: endpointConfig.appId || process.env.microsoftAppID,
    appPassword: endpointConfig.appPassword || process.env.microsoftAppPassword
});
console.log(adapter);

const memoryStorage = new MemoryStorage();

const conversationState = new ConversationState(memoryStorage);

const myBot = new MyBot(conversationState);
console.log(myBot);

adapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError]: ${error}`);
    context.sendActivity(`Oops. Something went wrong!`);
    await conversationState.load(context);
    await conversationState.clear(context);
    await conversationState.saveChanges(context);
};

server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await myBot.onTurn(context);
    });
});

