var fError = require('./');

function test1() {
  throw fError(test1.name)('Some error... and show the function name.');
}

var error = fError('example');

function test2(cb) {
  cb(error('hey now inside a callback.'));
}


[test1, test2].forEach(function(fn) {
  try {
    console.log('running function "%s"', fn.name);
    if (fn.length) {
      fn(function(err) {
        throw err;
      });
    } else {
      fn();
    }
  } catch(e) {
    console.log('Error: "%s"', e.message);
    console.log('Stack: "%s"', e.stack);
  }
  console.log('\n');
});
