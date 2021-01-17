'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
    static get table() {
        return 'articles'
    }
}

module.exports = Article
