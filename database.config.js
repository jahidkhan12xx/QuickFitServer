const mongoose  = require("mongoose")

const connectDB = async()=>{
     mongoose.connect(process.env.DB_URI)
     mongoose.connection.on('connected', () => {
    console.log("database connected");
})

// disable auto pluralize
mongoose.pluralize(null);
}

module.exports = connectDB