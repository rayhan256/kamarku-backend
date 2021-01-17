'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateRoomSchema extends Schema {
  up () {
    this.table('rooms', (table) => {
      // alter table
      table.integer('price')
      table.string('facility')
    })
  }

  down () {
    this.table('rooms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateRoomSchema
