const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    rate: {type: Number, required: [true]},
    comment: {type: String},
    complete: {type: Boolean, default:false}
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    title: {type: String, required: [true, "title: field is required"]}, 
    description: {type: String, required: [true, "description: field is required"]},
    complete: {type: Boolean, default:false},
    comments: {type: [CommentSchema]},
   }, {timestamps: true});

mongoose.model('Rate', CommentSchema);
mongoose.model('Cake', CakeSchema);

