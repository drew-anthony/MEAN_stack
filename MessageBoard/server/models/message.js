const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your Name: field is required"]}, 
    message: {type: Array, required: [true, "Your Message: field is required"]}
   }, {timestamps: true})

mongoose.model('Message', MessageSchema);

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your Name: field is required"]},
    comment: {type: Array, required: [true, "Your Comment: field is required"]}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema);