'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticlesSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      // alter table
      table.increments()
      table.string('title')
      table.string('content')
      table.string('image')
      table.string('author')
      table.datetime('date')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ArticlesSchema
