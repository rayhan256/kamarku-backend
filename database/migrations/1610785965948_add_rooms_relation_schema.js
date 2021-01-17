'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRoomsRelationSchema extends Schema {
  up () {
    this.table('rooms', (table) => {
      // alter table
      table.integer('owners_id').unsigned().references('id').inTable('owners')
    })
  }

  down () {
    this.table('rooms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddRoomsRelationSchema
