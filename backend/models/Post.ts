const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
    date: String,
    content: String,
    images: String, //base64?
});

module.exports = { Post };