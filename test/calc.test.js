import { random } from 'lodash'
import { createMessage } from '~/test/test-utils'
import start from '~/src/core'

describe('echo module', () => {
  let chatId
  let bot
  beforeEach(() => {
    chatId = random(100)
    bot = start()
  })

  it('calculates 1+1', async () => {
    bot.emit('message', createMessage('/calc 1+1', chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(chatId, 2)
  })

  it('calculates 3! > 3^3', async () => {
    bot.emit('message', createMessage('/calc 3! > 3^3', chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(chatId, false)
  })

  it('calculates log (2) * sqrt(5)', async () => {
    bot.emit('message', createMessage('/calc log (2) * sqrt(5)', chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(chatId, 1.5499242141443585)
  })

  it('calculates det([-1, 2; 3, 1])', async () => {
    bot.emit('message', createMessage('/calc det([-1, 2; 3, 1])', chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(chatId, -7)
  })

  it('says invalid expression for yolo swag', async () => {
    bot.emit('message', createMessage('/calc yolo swag', chatId))

    expect(bot.sendMessage).toHaveBeenCalledTimes(1)
    expect(bot.sendMessage).toHaveBeenLastCalledWith(
      chatId,
      "You stupid! I can't do that!"
    )
  })
})
