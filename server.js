'use strict';

var express = require('express');

var app = express();

require('./src/configure')(app);

app.get('/', function(req, res){
  res.status(404).json({});
});

app.use('/users', require('./src/routes/users'));

app.listen(process.env.PORT || 3000);
