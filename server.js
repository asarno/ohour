const express = require('express');
const pg = require('pg');
const path = require('path');
const modelcontroller = require('./server/model/modelcontroller');
const app = express();

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/student', modelcontroller.add);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
