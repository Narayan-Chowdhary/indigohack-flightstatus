const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI ;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db('flightDB'); 
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = {
  connectDB,
  getDB,
};
