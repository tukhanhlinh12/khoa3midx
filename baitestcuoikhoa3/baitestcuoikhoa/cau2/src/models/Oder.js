const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
    item: { type: String, required: true },
    quantity: { type: String, required: true},
    price: { type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model("oders", orderModel);
