'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RoomGallery extends Model {
    static get table() {
        return 'room_gallerys'
    }

    rooms() {
        return this.belongsTo('App/Models/Room')
    }
}

module.exports = RoomGallery
