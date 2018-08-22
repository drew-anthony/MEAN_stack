const shelters = require("./../controller/shelters");
const path = require('path');

module.exports = (app) => {
    app.get('/shelters', shelters.index),
    app.get('/shelters/:id', shelters.show),  
    app.post('/shelters', shelters.create),    
    app.put('/shelters/:id', shelters.edit),
    app.delete('/shelters/:id', shelters.delete),
    app.post('/shelters/:id', shelters.createC),
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });  
}