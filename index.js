'use strict';

var util  = require('util');
var chain = require('stack-chain');
var sep   = require('path').sep;

chain.filter.attach(function(error, frames) {
  // remove first stack that belows to fError
  return frames.slice(1).filter(function(callSite) {
    var name = callSite && callSite.getFileName();
    return (name && name.indexOf(sep) !== -1);
  });
});

function fError(name, message) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = util.format('%s', name);
  this.type = this.constructor.name;
  this.message = message;
}

util.inherits(fError, Error);

module.exports = function(name) {
  return function(message) {
    return new fError(name, message);
  };
};
