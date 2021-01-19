'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Amenity extends Model {
    static get table() {
        return 'amenities'
    }

    room() {
        return this.hasOne('App/Models/Room')
    }
}

module.exports = Amenity
