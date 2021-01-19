'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AmenitiesSchema extends Schema {
  up () {
    this.create('amenities', (table) => {
      table.increments()
      table.bool('has_tv')
      table.bool('has_kitchen')
      table.bool('has_air_con')
      table.bool('has_heating')
      table.bool('has_internet')
      table.integer('room_id').unsigned().references('id').inTable('rooms')
      table.timestamps()
    })
  }

  down () {
    this.drop('amenities')
  }
}

module.exports = AmenitiesSchema
