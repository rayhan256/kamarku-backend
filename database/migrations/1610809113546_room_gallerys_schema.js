'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomGallerysSchema extends Schema {
  up () {
    this.create('room_gallerys', (table) => {
      table.increments()
      table.string('image')
      table.string('desc')
      table.integer('rooms_id').unsigned().references('id').inTable('rooms')
      table.timestamps()
    })
  }

  down () {
    this.drop('room_gallerys')
  }
}

module.exports = RoomGallerysSchema
