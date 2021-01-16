const Post = require("../models/post");


exports.addPost = (req, res) =>{
    const post = new Post(req.body);
    post.save(post).then(newPost => {
        res.status(201).json({
            message: "Post added successfully",
            newPost: newPost
        });
    });
};
exports.getPosts = (req, res) =>{
    Post.find((err,posts)=>{
        if(err){
            return res.status(500).json({
                error : 'There is no posts'
            })
        }
        else res.send(posts);
    })
};
exports.getPostById = (req, res) =>{
    Post.findById(req.params.id,(err,post)=>{
        if(err){
            return res.status(500).json({
                error : 'the post is not exist'
            })
        }
        else res.send(post);
    })
};
exports.modifyPost = (req,res)=>{
    Post.findByIdAndUpdate(req.params.postId,req.body,(err,post)=>{
        if(err) res.status(500).send(err)
        else res.send("Post updated succesfuly")

    })
}
exports.removePost = (req,res)=>{
    Post.findByIdAndDelete(req.params.postId,err=>{
        if(err) res.status(500).send(err)
        else res.send("Post deleted succesfuly")

    })
}