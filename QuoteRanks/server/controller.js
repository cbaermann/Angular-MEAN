const author = require('./models');

module.exports ={
    allAuthors: (req, res)=> {
        author.find()
            .then(data => res.json({author: data}))
            .catch(err => res.json(err))
    },
    oneAuthor: (req, res)=> {
        author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createAuthor: (req,res )=> {
        author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateAuthor: (req, res)=> {
        author.updateOne({_id: req.params.id}, req.body)
            .then(data => res.json(data))
            .catch(err=> res.json(err))
    },
    deleteAuthor: (req, res)=> {
        author.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    addRating: (req, res)=>{
        author.updateOne({_id: req.params.id}, {
            $push: {ratings: {stars: req.body.stars, comment: req.body.comment}}
        })
            .then((cake)=>{
                return res.json(cake);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

}