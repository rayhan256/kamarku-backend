'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomTypesSchema extends Schema {
  up () {
    this.create('room_types', (table) => {
      // alter table
      table.increments()
      table.string('type', 20)
      table.string('desc')
      table.integer('capacity')
    })
  }

  down () {
    this.drop('room_types', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RoomTypesSchema
