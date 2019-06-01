const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongo_uri");

const connectDB = async () => {
  try {

    await mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex: true
    });
    console.log("mongoDB connection successful");
  } catch (error) {
    console.log("An error has occurred", error);
  }
};
module.exports = connectDB;
