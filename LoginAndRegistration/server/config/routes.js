const users = require("./../controller/users");

module.exports = (app) => {
    app.get('/', users.index),
    app.post('/registration', users.create),
    app.post('/login', users.login),
    app.get('/success', users.success)
}