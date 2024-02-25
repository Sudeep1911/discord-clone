import mongoose from "mongoose";

require('dotenv').config();

const uri: any = process.env.MONGO_ADDRESS;

mongoose.set('strictQuery', true);
mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000, // Adjust timeout settings
    socketTimeoutMS: 45000, // Adjust timeout settings
  });