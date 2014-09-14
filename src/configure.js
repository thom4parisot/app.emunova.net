'use strict';

var logger = require('morgan');
var favicon = require('serve-favicon');
var cors = require('cors');

module.exports = function(app){
  app.use(logger('combined'));

  app.use(favicon(__dirname + '/../favicon.ico'));

  app.use(cors({
    credentials: true,
    origin: function(origin, done){
      done(null, ['http://local.emunova.net:3000', 'http://emunova.net'].indexOf(origin) !== -1);
    }
  }));
};