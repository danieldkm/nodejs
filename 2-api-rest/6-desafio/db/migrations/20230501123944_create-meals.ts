import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.raw('PRAGMA foreign_keys = ON;')
  // .then(() => {
  //   console.log('Foreign Key Check activated.')
  // })
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.text('description').notNullable()
    table.timestamp('fed_on').notNullable()
    table.boolean('on_diet').defaultTo(false).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table
      .uuid('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
