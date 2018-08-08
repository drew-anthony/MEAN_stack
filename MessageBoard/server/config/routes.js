const messages = require("./../controller/messages");

module.exports = (app) => {
    app.get('/', messages.index),
    app.post('/messages', messages.create),
    app.get('/messages/comments', messages.createC)
}