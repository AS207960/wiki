exports.up = async knex => {
  await knex.schema.alterTable('users', table => {
    table.boolean('isRoot').notNullable().defaultTo(false)
    table.boolean('isGuest').notNullable().defaultTo(false)
  })
}

exports.down = knex => { }
