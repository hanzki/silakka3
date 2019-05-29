import { random } from 'lodash'
import { randomString, createMessage } from '~/test/test-utils'
import start from '~/src/core'

describe('echo module', () => {
  let chatId
  beforeEach(() => {
    chatId = random(100)
  })

  it('responds with same message', async () => {
    const string = randomString(10)
    const bot = start()
    bot.emit('message', createMessage(`/echo ${string}`, chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(chatId, string)
  })
})
