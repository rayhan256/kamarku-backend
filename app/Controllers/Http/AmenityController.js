'use strict'

const Room = use('App/Models/Room')
const Amenity = use('App/Models/Amenity')
class AmenityController {
    async index({view, params}) {
        const room = await Room.find(params.id)
        return view.render('amenities.add', {room: room})
    }

    async add({request, response, session}) {
        const {has_tv, has_kitchen, has_air_con, has_heating, has_internet, room_id} = request.all()

        const amenities = new Amenity()
        amenities.has_tv = has_tv ? has_tv : 0
        amenities.has_kitchen = has_kitchen ? has_kitchen : 0
        amenities.has_air_con = has_air_con ? has_air_con : 0
        amenities.has_heating = has_heating ? has_heating : 0
        amenities.has_internet = has_internet ? has_internet : 0
        amenities.room_id = room_id

        await amenities.save()
        session.flash({notification: "Amenities added"})
        return response.redirect('/room_detail/'+room_id)
    }
}

module.exports = AmenityController
