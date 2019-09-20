const controller = require('./controller')

module.exports = function (app) {
    app.get('/api/pets', controller.allPets)
    app.get('/api/pets/:id', controller.onePet)
    app.post('/api/pets', controller.createPet)
    app.put('/api/pets/:id', controller.updatePet)
    app.delete('/api/pets/:id', controller.deletePet)

}