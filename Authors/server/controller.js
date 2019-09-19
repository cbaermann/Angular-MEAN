const author = require('./models');
const path = require('path')

module.exports = {
    allAuthors: function(req, res){
        console.log("all tasks route");
        author.find()
            .then(data => res.json({author : data }))
            .catch(err => res.json(err))
    },
    oneAuthor: function(req, res){
        author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createAuthor: function(req, res){
        author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateAuthor: function(req, res){
        console.log("update tasks route");
        console.log(req.params.id);
        console.log(req.body);
        
        author.updateOne({_id: req.params.id}, req.body)
            // .then(author.save())
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deleteAuthor: function(req, res){
        author.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    Failsafe: function(req, res){
        res.sendFile(path.resolve(__dirname, '../public/dist/public/index.html'))
    }


}