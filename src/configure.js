'use strict';

var logger = require('morgan');
var favicon = require('serve-favicon');
var cors = require('cors');
var config = require('nconf');

module.exports = function(app){
  // Express only stuff
  app.use(logger('combined'));
  app.use(favicon(__dirname + '/../favicon.ico'));

  // Configuration
  config
    .use('memory')
    .env()
    .defaults(require('../package.json').config || {});

  // CORS
  app.use(cors({
    credentials: true,
    origin: function(origin, done){
      done(null, ['http://local.emunova.net:3000', 'http://emunova.net'].indexOf(origin) !== -1);
    }
  }));

  // Database
  app.locals.db = require('knex')({
    client: 'mysql',
    connection: config.get('MYSQL_DB_URL')
  });
};
