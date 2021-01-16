const  Forum=require('../models/Forum.js')
const mongoose = require('mongoose')
module.exports = {
    addForum : function (req,res){
        const id = new mongoose.Types.ObjectId();
        let newForum = new Forum({
            _id:id,
            title:req.body.title
        })
        newForum.save(newForum).then(f => {
            res.status(201).json({
                message: "Forum added successfully",
                f: f
            });
        });
    },

    getForumsById : function (req,res) {
        Forum.findOne({_id : req.params.idForum},(err,result)=>{
            if(err) res.status(500).send('error : '+err);
            else if(!result) res.status(404).send(`this forum doesn't exist`);
            else res.json({
                    message : 'forum rendred successfuly',
                    forum : result
                });
        })
    },

    modifyForum : function (req, res) {
        Forum.updateOne({ _id: req.params.idForum},{title: req.body.title}).then(result => {
            if(result.nModified>=0){
                res.status(200).json({ message: "forum a été modifié avec succés" });
            }


        },error=>{
            if(err) res.status(500).send('error : '+err);
        });
    },
    removeForum : function (req,res) {
        Forum.deleteOne({ _id: req.params.idForum}).then(result => {

            if(result.n>0){
                res.status(200).json({ message: "forum a été supprimé avec succés" });
            }

        });
    },
    getForums:function(req,res) {
        Forum.find().then(results=>{

            if(results) res.status(200).json(results);
        }).catch(err=>{
            if(err) res.status(500).send('error : '+err);
        })
    }
}

