const users = require("./../controller/tasks");

module.exports = (app) => {
    app.get('/tasks', users.index),
    app.get('/tasks/:id', users.show),  
    app.post('/tasks/', users.create),    
    app.put('/tasks/:id', users.update),
    app.delete('/tasks/:id', users.delete)    
}