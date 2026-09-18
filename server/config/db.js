const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/notes_db")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err.message);
    });

module.exports = mongoose;