'use strict'

class DashboardController {
   async index({response, view}) {
        return response.send(view.render('index'))
    }
}

module.exports = DashboardController
