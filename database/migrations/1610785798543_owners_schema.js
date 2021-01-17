'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnersSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments()
      table.string('name')
      table.string('address')
      table.string('gender')
      table.string('phone')
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnersSchema
