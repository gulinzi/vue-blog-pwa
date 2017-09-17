// var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();

app.use(function (req, res, next) {
  var sslUrl;

  if (process.env.NODE_ENV === 'production' &&
    req.headers['x-forwarded-proto'] !== 'https') {

    sslUrl = ['https://', req.hostname, req.url].join('');
    return res.redirect(sslUrl);
  }

  return next();
  
  });

var path = require('path');
var serveStatic = require('serve-static');
// app.use(sslRedirect());
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);