'use strict';

var util  = require('util');
var chain = require('stack-chain');
var sep   = require('path').sep;



function FError(name, message) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.name = util.format('%s', name);
  this.type = this.constructor.name;
  this.message = message;
}

util.inherits(FError, Error);

module.exports = function(name, limitStack) {
  return function(message) {
    return new FError(name, message);
  };
};
