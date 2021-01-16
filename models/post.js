const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({
    nom: {
        type: String,
        trim : true,
        required : true,
        maxlength : 32
    },
    title : {
        type:String,
        trim:true,
        required:true
    },
    theme: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Theme",
        required : true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    },{timestamps: true}

);
//virtuals fields
module.exports = mongoose.model("Post", postSchema);