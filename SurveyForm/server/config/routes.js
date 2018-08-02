module.exports = (app) => { 

    app.get("/", (req, res)=>{
        res.render("index");
    })
    app.post('/users', function (req, res){
        // console.log("POST DATA \n\n", req.body)
        users = req.body
        //code to add user to db goes here! 
        res.redirect('/result')
    })
    app.get("/result", (req, res)=>{
        console.log(users)
        res.render("result", {user: users});
    })
}