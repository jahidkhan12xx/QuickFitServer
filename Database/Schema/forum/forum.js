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
          userName: String,
          userPhoto : String,
        },
      ],
      
      userName: String,
      userPhoto: String,

})

module.exports = mongoose.model("forum", forumSchema, "forums")