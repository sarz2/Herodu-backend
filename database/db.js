const mongoose = require("mongoose");

//Connect to database
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING
    );

    console.log(`MongoDB connected ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
