const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const ConnectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(` Mongodb Database Error  => ${error.name} ${error.message}`);
    console.log('Server is shutting down');
    process.exit(1);
  }
};

module.exports = ConnectDB;
