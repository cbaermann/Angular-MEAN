const cake = require('./models');

module.exports ={
    allCakes: (req, res)=> {
        cake.find()
            .then(data => res.json({cake: data}))
            .catch(err => res.json(err))
    },
    oneCake: (req, res)=> {
        cake.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createCake: (req,res )=> {
        cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateCake: (req, res)=> {
        cake.updateOne({_id: req.params.id}, req.body)
            .then(data => res.json(data))
            .catch(err=> res.json(err))
    },
    deleteCake: (req, res)=> {
        cake.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    addRating: (req, res)=>{
        cake.updateOne({_id: req.params.id}, {
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