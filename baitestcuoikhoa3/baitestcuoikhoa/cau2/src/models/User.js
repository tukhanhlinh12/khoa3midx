const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    username: { type: String, required: true},
    role: { type: String},
    password: { type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model("users", userModel);
