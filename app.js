require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('/', routes.home);

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log('Catch the action at http://localhost:' + port);
});
