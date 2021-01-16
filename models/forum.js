const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    title: {
        type: String,
        trim : true,
        required : true,
    }
    },{timestamps: true}
);

module.exports = mongoose.model("Forum", forumSchema);