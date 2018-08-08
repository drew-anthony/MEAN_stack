const messages = require("./../controller/messages");

module.exports = (app) => {
    app.get('/', messages.index),
    app.post('/messages', messages.create),
    app.post('/messages/comments/:id', messages.createC)
}