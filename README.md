# Silakka Telegram bot v3.0

## Getting started

### Running locally

1. Create new bot using https://telegram.me/BotFather

2. Create .env file in project root (its gitignored on purpose)

```
TELEGRAM_API_TOKEN=<your-api-token-here>
```

3. Install dependencies

```
yarn

// or

npm install
```

4. Start the bot

```
yarn start:watch

// or

npm run start:watch
```

5. Message your bot

```
/echo I'm the bestest bot!
```

### Adding a new module

1. Create new JS file 'myModule.js' under src/modules

```javascript
import logger from "~/src/logger";

export default bot => {
  bot.onText(/\/myCommand (.+)/, (msg, match) => {
    const { chat } = msg;
    const [, resp] = match;

    logger.debug(`MyModule message received: "${resp}"`);
    bot.sendMessage(chat.id, "Bot response from MyModule");
  });

  logger.info(`MyModule module added`);
};
```

2. Import and add the module in module list of src/modules/index.js

```javascript
import echo from "~/src/modules/echo";
import myModule from "~/src/modules/myModule";

// add module initializers here
const modules = [echo, myModule];
```

3. Restart the bot if not running in watch mode (start:watch will automatically reload upon save)

4. Test the module!

```
/myCommand My new amazing module!
```

## Planning

### Main focus

- Update frameworks
- Switch from Python -> Node.js? (https://github.com/yagop/node-telegram-bot-api)
- Enable better spam control
- Remove unused bundles
- Recreate old bundles with Node.js
- Move to a new server

### New features

- 8-ball functionality
- News headlines & weather
- Poor jokes from Koululaisen vitsikirja or similar
- Bing search

### Improvements

- Wikipedia module
- Google module (add more lines to results, better searches)

### Remove

- Rating system commands from TG
- Not working oracle system

### RoadMap

7/2019: Eka versio

### Proposed Technologies

https://github.com/yagop/node-telegram-bot-api
https://github.com/baconjs/bacon.js/
