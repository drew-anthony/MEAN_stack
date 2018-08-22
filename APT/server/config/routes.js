var resturants = require("./../controllers/resturants");
var path = require("path");

module.exports = app => {
    app.get("/resturants", resturants.root),
    app.get("/resturants/:id", resturants.display),
    app.post("/resturants", resturants.create),
    app.put("/resturants/:id", resturants.update),
    app.delete("/resturants/:id", resturants.delete),
    app.post("/resturants/:id", resturants.createRating),
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};