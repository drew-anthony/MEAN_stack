const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your Name: field is required"]},
    comment: {type: Array, required: [true, "Your Comment: field is required"]}
}, {timestamps: true})

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Your Name: field is required"]}, 
    message: {type: Array, required: [true, "Your Message: field is required"]},
    comments: {type: [CommentSchema]}
   }, {timestamps: true})



const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);