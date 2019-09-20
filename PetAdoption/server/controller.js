const pet = require('./models');

module.exports = {
    allPets: function(req, res){
        console.log("all pets route");
        pet.find()
            .then(data => res.json({pet : data }))
            .catch(err => res.json(err))
    },
    onePet: function(req, res){
        pet.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createPet: function(req, res){
        pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updatePet: function(req, res){
        console.log("update pet route");
        console.log(req.params.id);
        console.log(req.body);
        
        pet.updateOne({_id: req.params.id}, req.body)
            // .then(task.save())
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    deletePet: function(req, res){
        pet.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}