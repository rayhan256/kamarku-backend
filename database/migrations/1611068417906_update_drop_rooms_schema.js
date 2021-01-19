'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateRoomsSchema extends Schema {
  up () {
    this.table('rooms', (table) => {
      // alter table
      table.dropColumn('isDecorated')
      table.dropColumn('facility')
    })
  }

  down () {
    this.table('rooms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateRoomsSchema
