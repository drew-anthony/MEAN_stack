const mongoose = require('mongoose');
const Task = mongoose.model("Task");

module.exports = {
    index: (req, res) => {
        Task.find({}, (err, data)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(data);
                res.json(data);
            }
        })
    },
    create: (req,res) => {
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(err => res.send(err))
    },
    show: (req, res) => {
        Task.findOne({_id: req.params.id}, (err, task)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json({data:task}); 
            }
        });
    },
    delete: (req, res) => {
        Task.remove({_id: req.params.id}, (err, task) =>{
                res.json();
        });
    },
    update: (req, res) => {
        Task.update({_id: req.params.id}, req.body, (err, task)=>{
            if(err){
                console.log(err);
                res.json(err);
            }                
        });
    },
}
