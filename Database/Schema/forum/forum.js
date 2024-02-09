const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
    title : String,
    content : String,
    category: String,
    date: String,
    userEmail: String,
    likes : Array,
    comments: [
        {
          text: String,
          userEmail: String, // Add the user email or any other relevant info
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],


})

module.exports = mongoose.model("forum", forumSchema, "forums")