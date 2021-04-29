const Base = require('./Base')

class User extends Base {
  static get tableName() {
    return 'users'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],

      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        surname: { type: 'string'},
        email: { type: 'string'},
        password: { type: 'string'},
        createdAt: { type: 'timestamp' },
        updatedAt: { type: 'timestamp' }
      }
    }
  }
}

module.exports = User
