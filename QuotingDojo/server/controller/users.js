const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = {
    index: (req, res) => {
        res.render("index")
        console.log('1');
    },
    create: (req,res) => {
        const user = new User();
        user.name = req.body.name;
        user.quote = req.body.quote;
        user.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/quote');
        })
    },
    list: (req,res) =>{
        User.find({}, (err, usersFromDB)=>{
        res.render('quotes',{users:usersFromDB})
        })
    }    
}