const Theme = require("../models/theme");
const mongoose = require('mongoose')

exports.addTheme = (req,res)=>{
    const id = new mongoose.Types.ObjectId();
    let newTheme = new Theme(
        req.body
    )
    newTheme.save(newTheme).then(createdTheme => {
        res.status(201).json({
            message: "Theme added successfully",
            createdTheme: createdTheme
        });
    });
},
exports.getThemesByForum = (req,res)=>{
    Theme.find({forum:req.params.idForum}).then(results=>{

        if(results) res.status(200).json(results);
    }).catch(err=>{
        if(err) res.status(500).send('error : '+err);
    })
},
exports.getThemeById = (req,res) =>{
    Theme.findOne({_id : req.params.idTheme},(err,result)=>{
        if(err) res.status(500).send('error : '+err);
        else if(!result) res.status(404).send(`there is no theme`);
        else res.json({
                message : 'theme rendered successfuly',
                theme : result
            });
    })
},

exports.modifyTheme = (req, res) =>{
    Theme.updateOne({ _id: req.params.idTheme},req.body).then(result => {
        if(result.nModified>=0){
            res.status(200).json({ message: "theme updated successfully" });
        }


    },error=>{
        if(err) res.status(500).send('error : '+err);
    });
},
exports.removeTheme = (req,res) =>{
    Theme.deleteOne({ _id: req.params.idTheme}).then(result => {

        if(result.n>0){
            res.status(200).json({ message: "Deletion successful!" });
        }




    });
}

