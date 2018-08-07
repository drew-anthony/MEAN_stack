const mongoose = require("mongoose");

const QuarterbackSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name: field is required"]}, 
    number: {type: String, required: [true, "Number: field is required"]},
    info: {type: String, required: [true, "Information field in required"]},
    pic: {type: String}
   }, {timestamps: true})

mongoose.model('Quarterback', QuarterbackSchema);