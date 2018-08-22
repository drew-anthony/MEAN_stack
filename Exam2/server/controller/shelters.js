const mongoose = require('mongoose');
const Shelter = mongoose.model("Shelter");

module.exports = {
    index: (req, res) => {
        Shelter.find({}, (err, shelter)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(shelter);
                res.json(shelter);
            }
        })
    },
    create: (req,res) => {
        var shelter = new Shelter(req.body);
        shelter.save((err, shelter) => {
            if(err){
                console.log(err);
                res.json({message:"Error", error: err});
            }
            else{
                res.json(shelter)
            }
        });
    },
    createC: (req,res) => {
        var comment = new Rate(req.body);
        comment.save((err, commentsFromDB) =>{
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else{
                Shelter.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
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
        Shelter.findOne({_id: req.params.id}, (err, shelter)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json({data:shelter}); 
            }
        });
    },
    delete: (req, res) => {
        Shelter.remove({_id: req.params.id}, (err, shelter) =>{
                res.json();
        });
    },
    edit: (req, res) => {
        Shelter.findOneAndUpdate({_id: req.params.id}, req.body, (err, shelter)=>{
            if(err){
                console.log(err);
                res.json(err);
            } 
            else{
                res.json(shelter);
            }               
        });
    },
}
