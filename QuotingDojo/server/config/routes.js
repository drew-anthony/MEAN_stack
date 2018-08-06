const users = require("./../controller/users");

module.exports = (app) => {
    app.get('/', users.index),
    app.post('/quotes', users.create),
    app.get('/quote', users.list)
}