const mongoose = require("mongoose");

const ShelterSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name: field is required"], minlength: 3, maxlength: 255}, 
    type: {type: String, required: [true, "type: field is required"], minlength: 3, maxlength: 255},
    description: {type: String, required: [true, "description: field is required"], minlength: 3, maxlength: 255},
    skill1: {type: String,},
    skill2: {type: String,},
    skill3: {type: String,},
    complete: {type: Boolean, default:false},
   }, {timestamps: true});

mongoose.model('Shelter', ShelterSchema);

