
# Small vinyl-stream wrapper -aka Gulp plugin- for node-notifier.

Run node-notifier within your streams. Useful to report errors, for example in combination with ["gulp-plumber"](https://www.npmjs.com/package/gulp-plumber).

> *NOTE:* No tests have been written yet!

## Installation

`yarn install`. Or `npm install`. Or just copy the files to your own project.

## Usage

With `gulp-plumber`:

```
const notifierWrapper = require('@eklingen/vinyl-stream-notifier')
return stream.pipe(plumber({ errorHandler: notifierWrapper() }))
```

## Options

See the options of ["node-notifier"](https://www.npmjs.com/package/node-notifier).

## Dependencies

This package requires ["node-notifier"](https://www.npmjs.com/package/node-notifier).

---

Copyright (c) 2019 Elco Klingen. MIT License.
