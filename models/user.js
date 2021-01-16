const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        trim : true,
        required : true,

    },
    prenom: {
        type: String,
        trim : true,
        required : true,

    },
    email: {
        type: String,
        required : true,
        unique:true

    },
    password: {
        type: String,
        required : true
    },
    
    username: {
        type: String,
        required : true
    },
    },{timestamps: true}
);

module.exports = mongoose.model("User", userSchema);