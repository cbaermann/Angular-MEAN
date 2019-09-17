const controller = require('./controller')

module.exports = function(app) {
    app.get('/cakes', controller.allCakes)
    app.get('/cakes/:id', controller.oneCake)
    app.post('/cakes', controller.createCake)
    app.put('/cakes/:id', controller.updateCake)
    app.delete('/cakes/:id', controller.deleteCake)
    app.post('/cakes/:id/rating', controller.addRating)
}