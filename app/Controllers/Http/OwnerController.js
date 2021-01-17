'use strict'

const Owner = use("App/Models/Owner")

class OwnerController {
    async index({view}) {
        const owners = await Owner.all()
        return view.render('owners.index', {owners: owners.toJSON()})
    }

    async addView({view}) {
        return view.render('owners.add')
    }

    async add({request, response, session}) {
        const name = request.input('name')
        const address = request.input('address')
        const gender = request.input('gender')
        const phone = request.input('phone')
        const email = request.input('email')

        const owners = new Owner()
        owners.name = name
        owners.address = address
        owners.gender = gender
        owners.phone = phone
        owners.email = email

        await owners.save()
        session.flash({notification: "Owner Saved"})

        return response.redirect('/owners')
    }

    async updateView({view, params}) {
        const owners = await Owner.find(params.id)
        return view.render('owners.update', {owners: owners})
    }

    async update({request, response, session}) {
        const id = request.input('id')
        const name = request.input('name')
        const address = request.input('address')
        const gender = request.input('gender')
        const phone = request.input('phone')
        const email = request.input('email')

        const owners = await Owner.find(id)
        owners.name = name ? name : owners.name
        owners.address = address ? address : owners.address
        owners.gender = gender ? gender : owners.gender
        owners.phone = phone ? phone : owners.phone
        owners.email = email ? email : owners.email

        await owners.save()

        session.flash({notification: "Owner Updated"})
        return response.redirect('/owners')
    }

    async delete({session, params, response}) {
        const owners = await Owner.find(params.id)
        
        owners.delete()
        session.flash({notification: "Owner Deleted"})
        return response.redirect('/owners')
    }
}

module.exports = OwnerController
