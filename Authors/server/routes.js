const controller = require('./controller')

module.exports = function (app) {
    app.get('/authors', controller.allAuthors)
    app.get('/authors/:id', controller.oneAuthor)
    app.post('/authors', controller.createAuthor)
    app.put('/authors/:id', controller.updateAuthor)
    app.delete('/authors/:id', controller.deleteAuthor)
    app.all('*', controller.Failsafe)
}