'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomsSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments()
      table.string('name')
      table.string('status')
      table.boolean('isDecorated')
      table.integer('room_types_id').unsigned().references('id').inTable('room_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomsSchema
