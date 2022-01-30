
const { MongoClient } = require('mongodb');
const { connect } = require('mongoose');
const uri = "mongodb+srv://babbaraerry%40gmail.com:HoyaHacks22@cluster0.hzry9.mongodb.net/HackerMatch?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = connect;