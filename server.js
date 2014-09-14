'use strict';

var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('combined'));

app.get('/', function(req, res){
  res.status(404).json({});
});

app.listen(process.env.PORT || 3000);
