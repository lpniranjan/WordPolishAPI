const mongoose = require('mongoose');
const config = require('./config');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.database.connectionUrl + '/' + config.database.dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = {
  connectToDatabase
};