/**
 * Mocks the telegram bot api to allow
 * unit testing without actual bot instance.
 *
 * @see https://jestjs.io/docs/en/manual-mocks
 * @see https://github.com/yagop/node-telegram-bot-api/blob/master/src/telegram.js
 */
class MockTelegramBot {
  /**
   * Constructor mimics TelegramBot's constructor.
   * None of these are actually used.
   *
   * @param {string} token
   * @param {Object} config
   */
  constructor (token, config) {
    this.token = token
    this.config = config
  }

  subscribers = {}

  /**
   * Mocked 'on', that saves the event handler in
   * the subscribers object.
   *
   * @param {string} event
   * @param {function} handler
   *
   * @returns {void}
   */
  on = (event, handler) => {
    if (!(event in this.subscribers)) {
      this.subscribers[event] = []
    }

    this.subscribers[event].push(handler)
  }

  /**
   * Mocked 'onText' that will respond only to messages
   * that match the given regexp.
   *
   * @param {regexp} matcher
   * @param {function} handler
   *
   * @returns {void}
   */
  onText = (matcher, handler) =>
    this.on('message', msg => {
      const match = msg.text?.match(matcher)
      return match && handler(msg, match)
    })

  /**
   * Emit an event of given type, passing it on to subscribers.
   *
   * @param {string} event
   * @param {*} content
   *
   * @returns {Promise[Array[*]]}
   */
  emit = (event, content) =>
    Promise.all(this.subscribers[event]?.map(handler => handler(content)))

  /**
   * Jest mock for the responses that modules send with the bot.
   * Useful for verifying module outputs.
   *
   * NOTE: Jest is configured to automatically clear mocks between
   * every test, so no need to do it manually
   *
   * @see https://jestjs.io/docs/en/configuration#clearmocks-boolean
   */
  sendMessage = jest.fn()
}

export default MockTelegramBot
