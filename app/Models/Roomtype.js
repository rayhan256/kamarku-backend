'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Roomtype extends Model {
    static get table() {
        return 'room_types'
    }

    static get createdAtColumn () {
        return null
    }

    static get updatedAtColumn () {
        return null
    }

    rooms() {
        return this.hasMany('App/Models/Rooms')
    }
}

module.exports = Roomtype
