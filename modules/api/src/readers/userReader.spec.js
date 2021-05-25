const { integration } = require('../../tests/setup')

const { db, Tester } = integration()

const reader = require('./userReader')

describe('getUsers', () => {
  test('should read all users', async () => {
    const user = await Tester.hasUser({
      name: 'Joe',
      surname: 'Adamson',
      password: 'polak123',
      email: 'test@o2.pl'
    })
    // await reader.createUser(db, {
    //   name: 'Joe',
    //   surname: 'Adamson',
    //   password: 'polak123',
    //   email: 'test@o2.pl'
    // })
    const userResult = await reader.getUsers(db)
    //  const [user] = await Tester.grabFromDatabase('users')

    expect(userResult).toMatchObject([{
      name: 'Joe',
      surname: 'Adamson',
      password: 'polak123',
      email: 'test@o2.pl'
    }])
  })
})
