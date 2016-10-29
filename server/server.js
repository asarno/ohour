
const express = require('express');
const pg = require('pg');
const path = require('path');
const modelcontroller = require('./controller/modelcontroller');
const Sequelize = require('sequelize');
const sequelize = new Sequelize();


const app = express();

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/submit', modelcontroller);



app.listen(3000, () => {
  console.log('listening on port 3000');
});
