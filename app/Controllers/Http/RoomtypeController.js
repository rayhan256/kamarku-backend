'use strict'

const Roomtype = use('App/Models/Roomtype')

class RoomtypeController {
    async index ({view}) {
        const roomType = await Roomtype.all()
        return view.render('rooms/room_type', {data: roomType.toJSON()})
    }

    async addView({view}) {
        return view.render('rooms/room_type_add')
    }

    async add({request, response, session}) {
        const type = request.input('type')
        const desc = request.input('desc')
        const capacity = request.input('capacity');

        const roomType = new Roomtype()
        roomType.type = type
        roomType.desc = desc
        roomType.capacity = capacity

        await roomType.save()
        session.flash({notification: "Room Type Saved"})
        return response.redirect('/room_type')
    }

    async updateView({view, params}) {
        const roomType = await Roomtype.find(params.id)
        return view.render('rooms/room_type_update', {roomType: roomType})
    }

    async update({request, response, session}) {
        const id = request.input('id')
        const type = request.input('type')
        const desc = request.input('desc')
        const capacity = request.input('capacity');

        const roomType = await Roomtype.find(id)
        roomType.type = type ? type : roomType.type
        roomType.desc = desc ? desc : roomType.desc
        roomType.capacity = capacity ? capacity : roomType.capacity


        await roomType.save()
        session.flash({notification: "Room Type Updated"})
        return response.redirect('/room_type')
    }

    async delete({response, params, session}) {
        const roomType = await Roomtype.find(params.id)
        session.flash({notification: 'Room Type Deleted'})

        await roomType.delete()
        return response.redirect('/room_type')
    }
}

module.exports = RoomtypeController
