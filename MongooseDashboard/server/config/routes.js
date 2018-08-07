const users = require("./../controller/users");

module.exports = (app) => {
    app.get('/', users.index),
    app.get('/info/:id', users.info),  
    app.get('/creator', users.creator),
    app.post('/create', users.create),    
    app.get('/editor/:id', users.editor),
    app.post('/edit/:id', users.edit),
    app.get('/delete/:id', users.delete)    
}