const  Comment =require('../models/comment')
const mongoose = require('mongoose')
module.exports = {
    addComment : function (req,res){
        const id = new mongoose.Types.ObjectId();
        let newComment = new Comment(req.body)
        newComment.save(newComment).then(createdComment => {
            res.status(201).json({
                message: "Comment added successfully",
                createdComment: createdComment
            });
        });
    },

    getCommentsByPost : function (req,res) {
        Comment.find({post:req.params.postId}).then(results=>{
            if(results) res.status(200).json(results);
        }).catch(err=>{
            if(err) res.status(500).send('error : '+err);
        })
    },

    modifyComment : function (req, res) {
        Comment.updateOne({ _id: req.params.idComment},{message:req.body.message}).then(result => {
            if(result.nModified>=0){
                res.status(200).json({ message: "comment update successfully" });
            }


        },error=>{
            if(err) res.status(500).send('error : '+err);
        });
    },
    removeComment : function (req,res) {
        
    Comment.findByIdAndDelete(req.params.commentId,err=>{
        if(err) res.status(500).send(err)
        else res.send("comment deleted succesfully")




        });
    }
}

