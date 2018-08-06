const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your Name: field is required"]}, 
    quote: {type: Array, required: [true, "Your Quote: field is required"]}
   }, {timestamps: true})

mongoose.model('User', UserSchema);