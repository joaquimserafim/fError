'use strict';

var test = require('tape');
var fError = require('./')('MyTest');

test('throwing an error', function(assert) {
  assert.throws(function() {
    throw fError('Hello World');
  }, /MyTest: Hello World/);
  assert.end();
});

test('capturing an error and look for any reference to `fError` in the statck',
function(assert) {
  var error = fError('Ah one more error');

  assert.deepEqual(-1, error.stack.indexOf('ferror/index'));
  assert.pass(error.stack);
  assert.end();
});
