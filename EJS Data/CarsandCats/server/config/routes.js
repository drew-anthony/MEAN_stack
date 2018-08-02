module.exports = (app) => {

    app.get("/", (req, res)=>{
        res.render("index");
    })
    app.get("/cars", (req, res)=>{
        res.render('cars')
    })
    app.get("/cats", (req, res)=>{
        res.render('cats')
    })
    app.get("/forms", (req, res)=>{
        res.render('forms')
    })
    app.get("/Ghost", function (request, response){
        // hard-coded user data
        var direCat = [
            {name: "Ghost", food: "chicken", age: "9", sleepSpots: "on the Wall", picture:"../images/planeCat.jpg"}, 
        ];
        response.render('details', {cats: direCat});
      })
      app.get("/Greywind", function (request, response){
        // hard-coded user data
        var direCat = [
            {name: "Greywind", food: "beef", age: "9", sleepSpots: "Winterfell", picture:"../images/SharkCat.jpg"}, 
        ];
        response.render('details', {cats: direCat});
      })
      app.get("/Nymeria", function (request, response){
        // hard-coded user data
        var direCat = [
            {name: "Nymeria", food: "broth", age: "9", sleepSpots: "King's Landing", picture:"../images/friendCat.jpg"},
        ];
        response.render('details', {cats: direCat});
      })
}