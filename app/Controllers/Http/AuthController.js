'use strict'

const User = use("App/Models/User")

class AuthController {

    async loginView({view}) {
        return view.render('auth.login')
    }

    async loginJwt({request, auth, response}) {
        const {email, password} = request.all()
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let token = await auth.generate(user) 
                Object.assign(user, token)
                return response.json(user)
        }    
        } catch (error) {
            console.log(error)
            return response.json({message: "You are not registered", email: email, password: password})
        }

        
        // return auth.authenticator('jwt').withRefreshToken().attempt(email, password)
    }

    async logout({auth, response}) {
        try {
            await auth.authenticator('jwt').revokeTokens()
            return response.json({message: "Admin Logout"})
        } catch (err) {
            return response.json({error: "Cant Logout " + err})
        }
    }
}

module.exports = AuthController
