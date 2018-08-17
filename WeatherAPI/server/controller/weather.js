const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Rate = mongoose.model("Rate");

module.exports = {
    index: (req, res) => {
        Cake.find({}, (err, cake)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(cake);
                res.json(cake);
            }
        })
    },
    create: (req,res) => {
        Cake.create(req.body)
            .then(cake => res.json(cake))
            .catch(err => res.send(err))
    },
    createC: (req,res) => {
        var comment = new Rate(req.body);
        comment.save((err, commentsFromDB) =>{
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else{
                Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
                    if(err){
                        console.log('fail')
                    }
                    else{
                        console.log('success')
                    }
                });
                res.json(commentsFromDB);
            }
        });
    },
    show: (req, res) => {
        Cake.findOne({_id: req.params.id}, (err, cake)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json({data:cake}); 
            }
        });
    },
    delete: (req, res) => {
        Cake.remove({_id: req.params.id}, (err, cake) =>{
                res.json();
        });
    },
    update: (req, res) => {
        Cake.update({_id: req.params.id}, req.body, (err, cake)=>{
            if(err){
                console.log(err);
                res.json(err);
            }                
        });
    },
}
