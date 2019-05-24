import hello from '../src/index'

it('test', () => {
  expect(hello('sampo')).toEqual('Hello Sampo!')
})
