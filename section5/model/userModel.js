const mongoose = require("mongoose");

const restauSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String,
    },
    borough: String,
    cuisine: String,
    rates: [
      {
        date: Date,
        rate: String,
        score: Number,
      },
    ],
  },
  {
    collection: "users",
    timestamps: true,
    versionKey: false,
  }
);

const restauModel = mongoose.model("User", restauSchema);

module.exports = restauModel;
