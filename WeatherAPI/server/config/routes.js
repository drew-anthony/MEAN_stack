const weather = require("./../controller/weather");

module.exports = (app) => {
    app.get('/weather', weather.index),
    app.get('/weather/:id', weather.show),  
    app.post('/weather', weather.create),    
    app.put('/weather/:id', weather.update),
    app.delete('/weather/:id', weather.delete),
    app.post('/weather/:id', weather.createC)   
}