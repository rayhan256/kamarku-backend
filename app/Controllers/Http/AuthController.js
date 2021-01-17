'use strict'

class AuthController {
    async loginJwt({request, auth}) {
        const {email, password} = request.all()
        return auth.authenticator('jwt').withRefreshToken().attempt(email, password)
    }
}

module.exports = AuthController
