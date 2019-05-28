import { random, times } from 'lodash'
import { callbackData } from '~/src/callbacks'

export const randomString = length => times(length, () => random(9)).join('')

/**
 * Creates a new message object that can be emitted with the
 * mocked Telegram bot. The message should include the entire
 * command, e.g.:
 *
 *    '/echo Testing!'
 *
 * Chat id is optional but you'll most likely need it to verify the
 * mock calls.
 *
 * @param {string} msg
 * @param {string} chatId
 *
 * @return {Message}
 */
export const createMessage = (msg, chatId = random(100)) => ({
  chat: {
    id: chatId
  },
  text: msg
})

/**
 * Creates a new callback object that can be emitted with the
 * mocked Telegram bot. Module id should correspond to the module
 * you want to respond to the callback, and data to whatever the
 * module expects as a response string.
 *
 * Chat id is optional but you'll most likely need it to verify the
 * mock calls.
 *
 * @param {string} mod
 * @param {string} data
 * @param {string} chatId
 *
 * @return {Callback}
 */
export const createCallback = (mod, data, chatId = random(100)) => ({
  message: {
    chat: {
      id: chatId
    }
  },
  data: callbackData(mod, data)
})
