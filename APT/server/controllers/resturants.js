var mongoose = require("mongoose");
var Resturant = mongoose.model("Resturant");
var Rate = mongoose.model("Rate");

module.exports = {
    root: (req, res) => {
        Resturant.find({}, (err, resturantsFromDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json(resturantsFromDB);
            }
        });
    },
    display: (req, res) => {
        Resturant.findOne({_id: req.params.id}, (err, data) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json(data);
            }
        });
    },
    create: (req, res) => {
        var resturant = new Resturant(req.body);
        resturant.save((err, resturantsFromDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json(resturantsFromDB);
            }
        });
    },
    update: (req, res) => {
        Resturant.findOneAndUpdate({_id: req.params.id}, req.body, (err, resturantsFromDB) => {
            if(err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(resturantsFromDB);
            }
        });
    },
    delete: (req, res) => {
        Resturant.findOneAndRemove({_id: req.params.id}, (err, resturantsFromDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success"});
            }
        });
    },
    createRating: (req, res) => {
        var rate = new Rate(req.body);
        rate.save((err, ratesFromDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                Resturant.findOneAndUpdate({_id: req.params.id}, {$push: {rates: rate}}, function(err, comment){
                    if(err){
                        console.log('fail');
                    }
                    else{
                        console.log('success');
                    }
                });
                res.json(ratesFromDB);
            }
        });
    },
};