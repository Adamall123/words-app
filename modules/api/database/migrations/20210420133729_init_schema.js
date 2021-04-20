
module.exports = {
  up: async (knex) => {
    await knex.schema.createTable('users', (table) => {
      table.bigIncrements('id').primary()
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now())
      table.timestamp('updated_at', { useTz: false }).defaultTo(knex.fn.now())
      table.comment('Table users is used to store all users of the app')
    })
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists('users')
  }
}
