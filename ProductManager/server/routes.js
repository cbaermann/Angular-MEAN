const controller = require('./controller')

module.exports = function (app) {
    app.get('/api/products', controller.allProducts)
    app.get('/api/products/:id', controller.oneProduct)
    app.post('/api/products', controller.createProduct)
    app.put('/api/products/:id', controller.updateProduct)
    app.delete('/api/products/:id', controller.deleteProduct)
    
}