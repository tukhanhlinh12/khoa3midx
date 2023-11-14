const mongoose = require("mongoose");

const inventoryModel = mongoose.Schema({
    sku: { type: String, required: true},
    description: { type: String, required: true},
    instock: { type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model("inventorys", inventoryModel);
