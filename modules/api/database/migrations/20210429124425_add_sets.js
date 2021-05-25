
module.exports = {
  up: async (knex) => {
    await knex.schema.createTable('sets', (table) => {
      table.bigIncrements('id').primary()
      table.string('name').notNullable()
      table.boolean('isPublic').notNullable().default(false)
      table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now())
      table.timestamp('updated_at', { useTz: false }).defaultTo(knex.fn.now())
      table.bigInteger('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id')
    })

    await knex.schema.createTable('sets_items', (table) => {
      table.bigIncrements('id').primary()
      table.string('term').notNullable()
      table.string('definition').notNullable()
      table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now())
      table.timestamp('updated_at', { useTz: false }).defaultTo(knex.fn.now())
      table.bigInteger('set_id').unsigned().notNullable()
      table.foreign('set_id').references('sets.id')
    })

    // add levels table 

  },
  down: async (knex) => {
    await knex.schema.dropTableIfExists('sets')
    return knex.schema.dropTableIfExists('sets_items')
  }
}
