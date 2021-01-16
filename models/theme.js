const mongoose = require('mongoose')

const themeSchema = new mongoose.Schema({
    titre: {
        type: String,
        trim : true,
        required : true,
        maxlength : 32
    },
    description: {
        type: String,
        required : true,
        maxlength : 2000
    },
    moderator :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
   forum :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Forum",
        required : true
    },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Theme", themeSchema);