const mongoose = require("mongoose");

async function dbConfig() {
  try {
    const dbUrl = "mongodb://localhost:27017/web72";
    await mongoose.connect(dbUrl);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConfig;
