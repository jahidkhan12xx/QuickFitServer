const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    isBlocked: Boolean,
    createdAt: String,
    image: String,
    lastlogIn: Date,
    socialLinks: {
        facebook: String,
        instagram: String,
        twitter: String,
    }
})


module.exports = mongoose.model("Users",userSchema,"Users");