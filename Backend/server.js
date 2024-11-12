const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    
    // Check if the URI is loaded correctly
    if (!dbURI) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectdb;
