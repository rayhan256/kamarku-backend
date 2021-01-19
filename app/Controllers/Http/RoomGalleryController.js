'use strict'

const Room = use('App/Models/Room')
const RoomGallery = use('App/Models/RoomGallery')
const Helpers = use('Helpers')

class RoomGalleryController {
    async index({view}) {
        const rooms = await Room.all()
        return view.render('rooms.add_gallery', {rooms: rooms.toJSON()})
    }

    async add({request, response, session}) {
        const desc = request.input('desc')
        const room_id = request.input('room_id')
        const roomImage = request.file('image', {
            type: ['image'],
            size: '2mb',
            extnames: ['png', 'jpg', 'jpeg']
        })

        const roomGallery = new RoomGallery()
        roomGallery.image = `${new Date().getTime()}.${roomImage.subtype}`
        roomGallery.desc = desc
        roomGallery.rooms_id = room_id

        await roomImage.move(Helpers.publicPath('uploads/rooms'), {
            name: roomGallery.image
        })

        if(!roomImage.moved()) {
            session.flash({error: "File Tidak Sesuai Format (PNG, JPG, JPEG)"})
            return response.redirect('/rooms')
        } else {
            await roomGallery.save()
            session.flash({notification: 'Gambar Berhasil Diupload'})
            return response.redirect('/rooms')
        }     
    }

    async gallery({view, response}) {
        const rooms = await Room.query().with('gallery').fetch()  
        return view.render('rooms.gallery', {rooms: rooms.toJSON()})
        // return rooms
    }
}

module.exports = RoomGalleryController
