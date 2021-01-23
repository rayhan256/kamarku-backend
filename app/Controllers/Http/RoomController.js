'use strict'

const Room = use("App/Models/Room")
const Owner = use("App/Models/Owner")
const Roomtype = use('App/Models/Roomtype')
const RoomGallery = use('App/Models/RoomGallery')
const Amenity = use('App/Models/Amenity')
class RoomController {
    async index({view}) {
        const rooms = await Room.query().with('room_types').with('owners').fetch()
        return view.render('rooms.index', {rooms: rooms.toJSON()})
    }

    async addView({view}) {
        const owners = await Owner.all()
        const types = await Roomtype.all()
        const data = {
            owners: owners.toJSON(),
            types: types.toJSON()
        }
        return view.render('rooms.add_rooms', data)
    }

    async add({request, response, session}) {
        const name = request.input('name')
        const room_types_id = request.input('room_types_id')
        const price = request.input('price')
        const owners_id = request.input('owners_id')
        const total_bedroom = request.input('total_bedroom')
        const total_bathroom = request.input('total_bathroom')
        const summary = request.input('summary')

        const room = new Room()
        room.name = name
        room.status = 'Not Booked'
        room.room_types_id = room_types_id
        room.price = price
        room.owners_id = owners_id
        room.summary = summary
        room.total_bedroom = total_bedroom
        room.total_bathroom = total_bathroom

        await room.save()
        session.flash({notification: "Room Saved"})
        return response.redirect('/rooms')
    }

    async updateView({view, params}) {
        const rooms = await Room.find(params.id)
        const owners = await Owner.all()
        const types = await Roomtype.all()
        const data = {
            rooms: rooms,
            owners: owners.toJSON(),
            types: types.toJSON()
        }
        return view.render('rooms.update_rooms', data)
    }

    async update({request, response, session}) {
        const id = request.input('id')
        const name = request.input('name')
        const room_types_id = request.input('room_types_id')
        const price = request.input('price')
        const owners_id = request.input('owners_id')
        const total_bedroom = request.input('total_bedroom')
        const total_bathroom = request.input('total_bathroom')
        const summary = request.input('summary')

        const room = await Room.find(id)
        room.name = name ? name : room.name
        room.status = 'Not Booked'
        room.room_types_id = room_types_id ? room_types_id : room.room_types_id
        room.price = price ? price : room.price
        room.owners_id = owners_id ? owners_id : room.owners_id
        room.summary = summary ? summary : room.summary
        room.total_bedroom = total_bedroom ? total_bedroom : room.total_bedroom
        room.total_bathroom = total_bathroom ? total_bathroom : room.total_bathroom

        await room.save()
        session.flash({notification: "Room Updated"})
        return response.redirect('/rooms')
    }

    async delete({params, session, response}) {
        const room = await Room.find(params.id)
        await room.delete()
        session.flash({notification: "Room Deleted"})
        return response.redirect('/rooms')
    }

    //getting detail rooms
    async roomDetail({view, params}) {
        const detail = await Room.find(params.id)
        const detailGallery = await RoomGallery.query().where('rooms_id', '=', params.id).fetch()
        const amenity = await Amenity.query().where('room_id', '=', params.id).first()

       
        return view.render('details.room_detail', {detail: detail, gambar: detailGallery.toJSON(), amenity: amenity})
        // return {detail: detail, gambar: detailGallery.toJSON(), amenity: amenity}
    }
}

module.exports = RoomController