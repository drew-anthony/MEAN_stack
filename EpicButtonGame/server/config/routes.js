module.exports = (app) => { 

    app.get("/", (req, res)=>{
        res.render("index");
    })
    app.post('/count', function (req, res){
        res.redirect('/')
    })
    app.get("/result", (req, res)=>{
        console.log(users)
        res.render("result", {user: users});
    })
}