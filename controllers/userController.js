const User= require('../models/User')
const mongoose = require('mongoose')

module.exports = {
    addUser:function (req,res){
        let user = new User(req.body)
        user.save(user).then(newUser => {
            res.status(201).json({
                message: "user added successfully",
                newUser: newUser
            });
        });
    },
    getAllUser : function (req,res) {

        User.find().then(results=>{

            if(results) res.status(200).json(results);
        }).catch(err=>{
            if(err) res.status(500).send('error : '+err);
        })
    },
    getUserById : function (req,res) {
        User.findOne({_id : req.params.idUser},(err,result)=>{
            if(err) res.status(500).send('error : '+err);
            else if(!result) res.status(404).send(`this user doesn't exist`);
            else res.json({
                    message : 'user rendred succefully',
                    user: result
                });
        })

    },
    removeMember: function (req,res) {
        User.deleteOne({ _id: req.params.idUser}).then(result => {

            if(result.n>0){
                res.status(200).json({ message: "user deleted successfully!" });
            }
        });
    }
       
}
