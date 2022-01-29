const connect = require('./db');
const express = require('express')

connect();
const app = express()
const port = 3001;

app.use(express.json());

app.use('/api/login', require('./routes/login'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})