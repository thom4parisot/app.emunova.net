'use strict';

var routes = require('express').Router();
var cookieParser = require('cookie-parser');

var cookieOptions = {
  httpOnly: true,
  domain: '.emunova.net'
};

routes.get('/me', cookieParser(null, cookieOptions), function(req, res){
  if (!req.cookies.member_id) {
    return res.status(404).send({});
  }

  res.json({
    user: {
      id: req.cookies.member_id
    }
  });
});

module.exports = routes;