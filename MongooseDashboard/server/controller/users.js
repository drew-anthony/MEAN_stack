const mongoose = require('mongoose');
const Quarterback = mongoose.model("Quarterback");

module.exports = {
    index: (req, res) => {
        Quarterback.find({}, (err, qbsFromDB)=>{
        res.render("index", {qbs:qbsFromDB})
        console.log('1');
        })
    },
    create: (req,res) => {
        const qb = new Quarterback();
        qb.name = req.body.name;
        qb.number = req.body.number;
        qb.info = req.body.info;
        qb.pic = req.body.pic;
        qb.save((err)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/');
        })
    },
    creator: (req, res) => {
        res.render('create')
    },
    delete: (req, res) => {
        Quarterback.remove({_id: req.params.id}, (err, qbsFromDB) =>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/');
            }
        });
    },
    editor: (req, res) => {
        Quarterback.findOne({_id: req.params.id}, (err, qbsFromDB)=>{
            res.render('edit', {qbs:qbsFromDB})
            console.log('2');
            })
    },
    edit: (req,res) =>{
        Quarterback.update({_id: req.params.id}, req.body, (err, qbsFromDB)=>{
            if(err){
                console.log(err);
                }
            res.redirect('/');
                })
            },
    id: (req, res) =>{
        Quarterback.findOne({_id: req.params.id}, (err, qbsFromDB)=>{
            res.render('info', {qbs:qbsFromDB});
        })       
    }
}
