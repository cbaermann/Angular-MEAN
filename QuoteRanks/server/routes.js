const controller = require('./controller')

module.exports = function(app) {
    app.get('/api/authors', controller.allAuthors)
    app.get('/api/authors/:id', controller.oneAuthor)
    app.post('/api/authors', controller.createAuthor)
    app.put('/api/authors/:id', controller.updateAuthor)
    app.delete('/api/authors/:id', controller.deleteAuthor)
    app.post('/api/authors/:id/rating', controller.addRating)
}