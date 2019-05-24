import TelegramServer from 'telegram-test-api'
import { randomString } from '~/test/test-utils'
import start from '~/src/core'

describe('echo module', () => {
  const token = 'dummy-test-token'

  let server
  let client
  let bot

  beforeEach(async () => {
    server = new TelegramServer({ port: 9001 })
    await server.start()
    client = server.getClient(token)
    bot = start({ polling: true, baseApiUrl: server.ApiURL }, token)
  })

  it('responds with same message', async () => {
    const string = randomString(10)
    await client.sendMessage(client.makeMessage(`/echo ${string}`))

    const { result } = await client.getUpdates()
    const [{ message }] = result
    expect(message.text).toEqual(string)
  })

  afterEach(async () => {
    await server.stop()
    bot.stopPolling()
  })
})
