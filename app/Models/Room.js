'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
    static get table() {
        return 'rooms'
    }

    room_types() {
        return this.belongsTo('App/Models/Roomtype', 'room_types_id', 'id')
    }

    owners() {
        return this.belongsTo('App/Models/Owner', 'owners_id', 'id')
    }

    gallery() {
        return this.hasMany('App/Models/RoomGallery', 'id', 'rooms_id')
    }

    amenities() {
        return this.belongsTo('App/Models/Amenity', 'room_id', 'id')
    }

}

module.exports = Room
