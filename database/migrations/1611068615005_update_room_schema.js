'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateRoomWithAmenitiesSchema extends Schema {
  up () {
    this.table('rooms', (table) => {
      // alter table
      table.string('summary')
      table.integer('total_bedroom')
      table.integer('total_bathroom')
    })
  }

  down () {
    this.table('rooms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateRoomWithAmenitiesSchema
