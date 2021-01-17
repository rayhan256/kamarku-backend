'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateUsersColumnSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('gender', 20).nullable()
      table.string('photo').nullable()
      table.string('phone', 50).nullable()
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateUsersColumnSchema
