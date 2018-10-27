const { ActivityTypes } = require('botbuilder');
const TURN_COUNTER_PROPERTY = 'turnCounterProperty';

class MyBot {
  constructor(conversationState) {
    console.log(conversationState);
    this.countProperty = conversationState.createProperty(TURN_COUNTER_PROPERTY);
    this.conversationState = conversationState;
  }
  async onTurn(turnContext) {
    console.log(JSON.stringify(turnContext, null, 2));

    if (turnContext.activity.type === ActivityTypes.Message) {
      let count = await this.countProperty.get(turnContext);
      count = count === undefined ? 1 : ++count;
      await turnContext.sendActivity(`${count}: You said "${turnContext.activity.text}"`);
      await this.countProperty.set(turnContext, count);
    } else {
      await turnContext.sendActivity(`[${turnContext.activity.type} event detected]`);
    }
    await this.conversationState.saveChanges(turnContext);
  }
}

module.exports.MyBot = MyBot;
