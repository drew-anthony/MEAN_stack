const restaurants = require("./../controller/restaurants");
const path = require('path');

module.exports = (app) => {
    // app.get('/restaurants', restaurants.index),
    // app.get('/restaurants/:id', restaurants.show),  
    // app.post('/restaurants/new', restaurants.create),    
    // app.put('/restaurants/:id/edit', restaurants.update),
    // app.delete('/restaurants/:id', restaurants.delete),
    // app.post('/restaurants/:id', restaurants.createC),
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });  
}