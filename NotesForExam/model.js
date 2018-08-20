var mongoose = require('mongoose')

var dbSchema = new mongoose.Schema({
  name: {type: String}
}, {timestamps: true})

mongoose.model('dbModel', dbSchema)



var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: {type: String}
}, {timestamps: true})

mongoose.model('User', userSchema)



var mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({
  question: {type: String},
  answer: {type: String},
  fake1: {type: String},
  fake2: {type: String}
}, {timestamps: true})

mongoose.model('Question', questionSchema)



var mongoose = require('mongoose')

var gameSchema = new mongoose.Schema({
  name: {type: String},
  score: {type: Number},
  percent: {type: Number}
}, {timestamps: true})

mongoose.model('Game', gameSchema)
