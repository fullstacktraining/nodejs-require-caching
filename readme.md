# Node.js - caching data in required files or modules

Quick example to demonstrate that a file `require`d into different files in a Node.js application is in fact the same closure.

In reality this means that if anything is stored or cached in the the required file, any file that requires it can access the cached info.

This is very useful when building applications, but can take you by surprise if you're not aware that this is how it works!

## Running

Simply run `node app.js` in the comman line.

*Note: Use Node.js v 6+ to avoid ES6 warnings*

## What's happening

`app.js` requires a files called `util.js`.

`util.js` has a local variable `myData` initialised to `null`. It exposes two functions:

1. `set` - takes a single parameter and assigns the value to the `myData` variable.
2. `get` - returns the `myData` variable

`app.js` calls the `set` method of `util` sending it a string value.

`app.js` calls the `get` method of `util` and outputs it as a console log.

`app.js` requires another file `file2.js`.

`file2.js` requires in the `util.js` file.

`file2.js` calls the `get` method of `util` and outputs it as a console log.

Both `console.log` statements have the same value, as the data is cached inside the `util.js` file.