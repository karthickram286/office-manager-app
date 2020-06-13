const mongoose = require('mongoose');
const _ = require('lodash');

const password = process.env.DB_PASSWORD;

if (_.isEmpty(password)) {
  console.log(`DB password is not configured... Exiting application`);
  process.exit(1);
}

const mongodbURI = `mongodb+srv://office-manager-db-user:${password}@cluster0-jkoqu.mongodb.net/prod-db?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(`Connected to Mongo DB...`);
  } catch (error) {
    console.log(`Can't conncet to Mongo DB ${error}... Exiting application`);
    process.exit(1);
  }
}

module.exports = connectDB;