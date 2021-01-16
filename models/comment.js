const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        trim : true,
        required : true,
        maxlength : 60
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Post',
        required : true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
    },{timestamps: true}
);

module.exports = mongoose.model("Comment", commentSchema);