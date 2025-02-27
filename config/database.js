const mongoose = require('mongoose');
const { Uri } = require('./env');

const connectDB = async () => {
  try {
    await mongoose.connect(Uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;