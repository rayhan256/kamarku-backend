'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = new User()
    user.username = "rayhan256"
    user.address = "Jl Antapani"
    user.firstname = "Rayhan"
    user.lastname = "Rahmat Aziz"
    user.email = "rayhangamawanto@gmail.com"
    user.password = "123"
    user.gender = "Pria"
    user.photo = "-"
    user.phone = "085882715554"
    user.role = "admin"

    await user.save()
  }
}

module.exports = UserSeeder
