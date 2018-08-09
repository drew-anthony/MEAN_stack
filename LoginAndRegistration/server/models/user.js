const mongoose = require("mongoose");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {type: String, unique: [true,"You must use a unique email"], required: [true, "Your email: field is required"]}, 
    firstName: {type: Array, required: [true, "Your First Name: field is required"]},
    lastName: {type: String, required: [true, "Your Last Name: field is required"]}, 
    hash: {type: String, required: [true, "Your Password: field is required"]},
    salt: {type: String},
    birthday: {type: Array, required: [true, "Your Birthday: field is required"]},
   }, {timestamps: true})

mongoose.model('User', UserSchema);

UserSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'The e-mail field cannot be empty.')