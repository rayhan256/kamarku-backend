'use strict'

/*
|--------------------------------------------------------------------------
| ArticleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database =  use('Database')

class ArticleSeeder {
  async run () {
    // const articles = await Database.table('articles')
    // console.log(articles);
    // await Factory.get('articles').create()

  }
}

module.exports = ArticleSeeder
