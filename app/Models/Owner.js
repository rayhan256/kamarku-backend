'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Owner extends Model {
    static get table () {
        return 'owners'
    }

    rooms() {
        return this.hasMany('App/Models/Room')
    }
}

module.exports = Owner
