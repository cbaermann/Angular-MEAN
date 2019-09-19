const product = require('./models');

module.exports = {
    allProducts: function(req, res){
        console.log("all products route");
        product.find()
            .then(data => res.json({product : data }))
            .catch(err => res.json(err))
    },
    oneProduct: function(req, res){
        product.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createProduct: function(req, res){
        product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateProduct: function(req, res){
        console.log("update product route");
        console.log(req.params.id);
        console.log(req.body);
        
        product.updateOne({_id: req.params.id}, req.body)
            // .then(task.save())
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteProduct: function(req, res){
        product.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}