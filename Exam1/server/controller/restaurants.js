const mongoose = require('mongoose');
const Restaurant = mongoose.model("Restaurant");
const Rate = mongoose.model("Rate");

module.exports = {
    index: (req, res) => {
        Restaurant.find({}, (err, restaurant)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(restaurant);
                res.json(restaurant);
            }
        })
    },
    create: (req,res) => {
        Restaurant.create(req.body)
            .then(restaurant => res.json(restaurant))
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
                Restaurant.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
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
        Restaurant.findOne({_id: req.params.id}, (err, restaurant)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json({data:restaurant}); 
            }
        });
    },
    delete: (req, res) => {
        Restaurant.remove({_id: req.params.id}, (err, restaurant) =>{
                res.json();
        });
    },
    update: (req, res) => {
        Restaurant.update({_id: req.params.id}, req.body, (err, restaurant)=>{
            if(err){
                console.log(err);
                res.json(err);
            }                
        });
    },
}
