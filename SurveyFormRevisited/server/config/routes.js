module.exports = (app) => { 

    app.get("/", (req, res)=>{
        res.render("index");
    })
    app.post('/users', function (req, res){
        users = req.body
        res.redirect('/')
    })
    app.get("/result", (req, res)=>{
        console.log(users)
        res.render("result", {user: users});
    })
}