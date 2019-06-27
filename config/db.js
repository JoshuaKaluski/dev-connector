const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/devConnector', {useNewUrlParser: true});

    console.log("MongoDB Connected...");
  } catch (e) {
    console.error(e.message);
    //Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;