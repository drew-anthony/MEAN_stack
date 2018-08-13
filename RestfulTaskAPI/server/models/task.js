const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "title: field is required"]}, 
    description: {type: String, required: [true, "description: field is required"]},
    complete: {type: Boolean, default:false}
   }, {timestamps: true})

mongoose.model('Task', TaskSchema);

