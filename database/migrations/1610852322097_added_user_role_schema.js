'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddedUserRoleSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('role', 20)
    })
    
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddedUserRoleSchema
