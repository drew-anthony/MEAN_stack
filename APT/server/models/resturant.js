var mongoose = require("mongoose");

var RateSchema = new mongoose.Schema({
    customer: {type: String, required:[true, "Your name is required"], minlength: 3, maxlength: 50},
    rating: {type: Number, requred:[true, "Rating is required"], min: 1, max: 5},
    comment: {type: String, required:[true, "Comment is required"], minlength: 3, maxlength: 200},
    completed: {type: Boolean, default: false}
},
{timestamps: true});

var ResturantSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Resturant name is required"], minlength: 3, maxlength: 30}, 
    food: {type: String, required:[true, "Cuisine is required"], minlength: 3, maxlength: 200},
    completed: {type: Boolean, default: false},
    rates: {type: [RateSchema]},
    },
    {timestamps: true});

mongoose.model('Rate', RateSchema);    
mongoose.model('Resturant', ResturantSchema);



