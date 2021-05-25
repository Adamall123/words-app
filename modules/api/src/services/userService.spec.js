const { integration } = require('../../tests/setup')

const { db, Tester } = integration()

const service = require('./userService')

describe('createUser', () => {
  test('should create a user', async () => {
    await service.createUser(db, {
      name: 'Joe',
      surname: 'Adamson',
      password: 'polak123',
      email: 'test@o2.pl'
    })

     const [user] = await Tester.grabFromDatabase('users')

    expect(user).toMatchObject({
      name: 'Joe',
      surname: 'Adamson',
      password: 'polak123',
      email: 'test@o2.pl'
    })
  })
})
