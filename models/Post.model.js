const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content:{
        type: String,
        required:true,
    },
    tags: {
        type:Array,
    }
})

module.exports = mongoose.model('Post', PostSchema)


