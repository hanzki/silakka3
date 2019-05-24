# Silakka Telegram bot v3.0

## Getting started

### Running locally

1. Create new bot using https://telegram.me/BotFather

2. Create .env file in project root (its gitignored on purpose)

```
TELEGRAM_API_TOKEN=<your-api-token-here>
```

3. Run

```
yarn start:watch

// or

npm run start:watch
```

4. Message your bot

```
/echo I'm the bestest bot!
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
