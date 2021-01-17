'use strict'

const Route = use('Route')

//Auth
Route.group(() => {
    Route.post('login', 'AuthController.loginJwt').as('loginJwt')
}).prefix('api/auth')

Route.group(() => {
    Route.get('/users', 'UserController.getUser').middleware(['auth:jwt'])
}).prefix('api/v1')

//home
Route.get('/', 'DashboardController.index')

//auth
Route.get('/login', 'AuthController.loginView')


//article
Route.get('/article', 'ArticleController.index')
Route.get('/article/add', 'ArticleController.viewAdd')
Route.post('/article/add/post', 'ArticleController.add')
Route.get('/artice/update/:id', 'ArticleController.updateView')
Route.post('/article/update', 'ArticleController.update')
Route.get('/article/delete/:id', 'ArticleController.delete')

//room-type
Route.get('/room_type', 'RoomtypeController.index')
Route.get('/room_type/add', 'RoomtypeController.addView')
Route.post('/room_type/add/post', 'RoomtypeController.add')
Route.get('/room_type/update/:id', 'RoomtypeController.updateView')
Route.post('/room_type/update', 'RoomtypeController.update')
Route.get('/room_type/delete/:id', 'RoomtypeController.delete')

//owners
Route.get('/owners', 'OwnerController.index')
Route.get('/owners/add', 'OwnerController.addView')
Route.post('/owners/add/post', 'OwnerController.add')
Route.get('/owners/update/:id', 'OwnerController.updateView')
Route.post('/owners/update', 'OwnerController.update')
Route.get('/owners/delete/:id', 'OwnerController.delete')

//rooms
Route.get('/rooms', 'RoomController.index')
Route.get('/rooms/add', 'RoomController.addView')
Route.post('/rooms/add/post', 'RoomController.add')
Route.get('/rooms/update/:id', 'RoomController.updateView')
Route.post('/rooms/update', 'RoomController.update')
Route.get('/rooms/delete/:id', 'RoomController.delete')

