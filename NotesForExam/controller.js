var mongoose = require('mongoose')
var user = mongoose.model('User')
var question = mongoose.model('Question')
var game = mongoose.model('Game')

module.exports = {
  login: (req, res) => {
    user.findOne({name: req.body.username})
      .then(data => {
        if (data) { // user exists and name added to session
          req.session.user = data.name
          res.json({name: data.username})
        } else { // user DNE, add user to usre DB
          let newUser = new user({name: req.body.username})
          newUser.save()
            .then(() => {              
              req.session.user = newUser.name
              res.json({name: user})
            })
            .catch(err => { console.log(err) })
        }
      })
      .catch(err => { console.log(err) })
  },
  logout: (req, res) => {
    req.session.destroy()
    res.json(true)
  },
  checkStatus: (req, res) => {
    res.json({loggedIn: req.session.user})
  },
  addQuestion: (req, res) => {
    let newQuestion = new question(req.body)
    newQuestion.save()
      .then(() => res.json(true))
      .catch(err => console.log(err))
  },
  makeQuiz: (req, res) => {
    question.find()
      .limit(3)
      .then(data => res.json(data))
      .catch(err => console.log(err))
  },
  addGame: (req, res) => {
    let newGame = new game()
    newGame.name = req.session.user
    newGame.score = req.body.score
    newGame.percent = newGame.score/3
    console.log(newGame)
    newGame.save()
      .then(() => res.json(true))
      .catch(err => console.log(err))
  },
  getGames:  (req, res) => {
    game.find()
      .sort({percent: -1})
      .then(data => res.json(data))
      .catch(err => console.log(err))
  }
}
