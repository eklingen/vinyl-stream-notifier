
# Small vinyl-stream wrapper -aka Gulp plugin- for node-notifier.

> This project was originally developed independently and has been used in projects at [Fabrique](https//www.fabrique.nl) and [Q42](https://www.q42.nl).
> It remains publicly available and can be forked or maintained independently if needed.
> No guarantees are provided for long-term maintenance.

Run node-notifier within your streams. Useful to report errors, for example in combination with ["gulp-plumber"](https://www.npmjs.com/package/gulp-plumber).

> *NOTE:* No tests have been written yet!

## Installation

`yarn install`. Or `npm install`. Or just copy the files to your own project.

## Usage

With `gulp-plumber`:

```javascript
const notifierWrapper = require('@eklingen/vinyl-stream-notifier')
return stream.pipe(plumber({ errorHandler: notifierWrapper() }))
```

With native node pipelines:

```javascript
const notifierWrapper = require('@eklingen/vinyl-stream-notifier')
const notify = notifier({ ...options }, () => {})

notify({ message: error })
```

## Options

See the options of ["node-notifier"](https://www.npmjs.com/package/node-notifier).

## Dependencies

This package requires ["node-notifier"](https://www.npmjs.com/package/node-notifier).

---

Copyright (c) 2019 Elco Klingen. MIT License.
