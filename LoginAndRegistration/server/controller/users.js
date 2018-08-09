const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = {
    index: (req, res) => {
        res.render("index")
        console.log('1');
    },
    create: (req,res) => {
        req.Validator.validate('email', i18n.t('email'), {
                length: {
                    min: 3,
                    max: 256
                },
                isUnique: function(field, fieldName, value, fn){
                        var errors = [];
                        if(value != 'unique'){
                        errors.push('this field is not unique');
                        }
                        fn(errors); 
                }
            })
            .filter('email', {
                trim: true
            })
            .validate('password', {
                length: {
                    min: 4,
                    max: 64
                }
            })
            .filter('password', {
                stripTags: false,
                escapeHTML: false
            });
        req.Validator.getErrors(function(errors){
        }); 
        const user = new User();
        user.email = req.body.email;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.password = req.body.password;
        user.birthday = req.body.birthday;
        user.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/success');
        })
    },
    login: (req,res) =>{
        User.find({}, (err, usersFromDB)=>{
        res.redirect('/success');
        })
    },
    success: (req,res) =>{
        res.render('success');
    }     
}