const users = require("./../controller/users");

module.exports = (app) => {
    app.get('/', users.index),
    app.get('/:id', users.id),
    app.post('/create', users.create),
    app.get('/creator', users.creator),
    app.get('/editor/:id', users.editor),
    app.post('/edit/:id', users.edit),
    app.get('/delete/:id', users.delete)
}