'use strict'

const Room = use('App/Models/Room')

class AmenityController {
    async index({view, params}) {
        const room = await Room.find(params.id)
        return view.render('amenities.add')
    }
}

module.exports = AmenityController
