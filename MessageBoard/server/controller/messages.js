const mongoose = require('mongoose');
const Message = mongoose.model("Message");

module.exports = {
    index: (req, res) => {
        Message.find({}, (err, messagesFromDB)=>{
        res.render("index",{messages:messagesFromDB})
        console.log('1');
        })
        Comment.find({}, (err, commentsFromDB)=>{
        res.render("index",{comments:commentsFromDB})
        console.log('1');
        })
    },
    create: (req,res) => {
        const message = new Message();
        message.name = req.body.name;
        message.message = req.body.message;
        message.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/');
        })
    },
    createC: (req,res) =>{
        const comment = new Comment();
        comment.name = req.body.name;
        comment.comment = req.body.comment;
        comment.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/');
        })
    },   
}