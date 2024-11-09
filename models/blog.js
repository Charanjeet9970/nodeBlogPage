const mongoose = require('mongoose');
const Sehema = mongoose.Schema;

let blogSehema = new Sehema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSehema);
module.exports = Blog;
