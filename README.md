# fError

**a nice way to create errors that shows only what matters**

<a href="https://nodei.co/npm/ferror/"><img src="https://nodei.co/npm/ferror.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/fError.png?branch=master)](https://travis-ci.org/joaquimserafim/fError)


####Example:

    var fError = require('ferror')('The name I want');

    var error = fError('some nasty error');

**the output shows the string/value ('The name I want') we used for the error name & shows only the stack we need to see**    

    The name I want: some nasty error
        at /Users/quim/Projects/opensource/ferror/index.js:27:12
        at Test.<anonymous> (/Users/quim/Projects/opensource/ferror/test.js:15:15)
        at Test.bound [as _cb] (/Users/quim/Projects/opensource/ferror/node_modules/tape/lib/test.js:59:32)
        at Test.run (/Users/quim/Projects/opensource/ferror/node_modules/tape/lib/test.js:72:10)
        at Test.bound [as run] (/Users/quim/Projects/opensource/ferror/node_modules/tape/lib/test.js:59:32)
        at Object.next [as _onImmediate] (/Users/quim/Projects/opensource/ferror/node_modules/tape/lib/results.js:66:15)