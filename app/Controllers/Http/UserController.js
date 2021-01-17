'use strict'

const User = use("App/Models/User")

class UserController {
    async getUser({auth, response}) {
        try {
            const user = await auth.getUser()
            return user
        } catch (error) {
            return response.send("error : Should Login First")
        }
    }
}

module.exports = UserController
