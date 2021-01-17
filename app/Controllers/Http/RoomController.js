'use strict'

const Room = use("App/Models/Room")
const Owner = use("App/Models/Owner")
const Roomtype = use('App/Models/Roomtype')

class RoomController {
    async index({view}) {
        const rooms = await Room.query().with('room_types').with('owners').fetch()
        return view.render('rooms.index', {rooms: rooms.toJSON()})
        // return room
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
        const isDecorated = request.input('isDecorated')
        const room_types_id = request.input('room_types_id')
        const price = request.input('price')
        const facility = request.input('facility')
        const owners_id = request.input('owners_id')

        const room = new Room()
        room.name = name.trim()
        room.status = 'Not Booked'
        room.isDecorated = isDecorated
        room.room_types_id = room_types_id
        room.price = price
        room.facility = facility
        room.owners_id = owners_id

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
        const isDecorated = request.input('isDecorated')
        const room_types_id = request.input('room_types_id')
        const price = request.input('price')
        const facility = request.input('facility')
        const owners_id = request.input('owners_id')

        const room = await Room.find(id)
        room.name = name.trim()
        room.status = 'Not Booked'
        room.isDecorated = isDecorated ? isDecorated : room.isDecorated
        room.room_types_id = room_types_id ? room_types_id : room.room_types_id
        room.price = price ? price : room.price
        room.facility = facility ? facility : room.facility
        room.owners_id = owners_id ? owners_id : room.owners_id

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
}

module.exports = RoomController
