// Small vinyl-stream wrapper -aka Gulp plugin- for node-nodifier.

const { join } = require('path')

const DEFAULT_OPTIONS = {
  title: '',
  subtitle: '',
  message: '',
  icon: '',
  sound: false,
  open: false,
}

const DEFAULT_ERROR_OPTIONS = {
  title: '😱 Oh no!',
  icon: 'icon.png',
  sound: false
}

const DEFAULT_REGULAR_OPTIONS = {
  title: '🧐 Pay attention!',
  icon: 'icon.png',
  sound: false
}

function nodeNotifierWrapper (options = {}, callback = () => {}) {
  const notifier = require('node-notifier')
  const reporter = notifier.notify.bind(notifier)

  const report = function (object, options = {}) {
    if (object instanceof Error) {
      options = { ...DEFAULT_ERROR_OPTIONS, ...options}
    } else {
      options = { ...DEFAULT_REGULAR_OPTIONS, ...options}
    }

    const message = options.message || object.message || object.formatted || object.relativePath || object.fileName || object;
    const result = {...options, message }})

    console.log(`${result.title ? result.title + '\n' : ''}${result.subtitle ? result.subtitle + '\n' : ''}${object.formatted || result.message}`)
    result.message = (object.formatted || result.message).replace(/\\x1b[@-_][0-?]*[ -/]*[@-~]/gi, '') // Strip ANSI codes

    reporter(result, error => callback(error ? new Error(error) : null))
  }

  return error => report(error, options, () => callback(error))
}

module.exports = nodeNotifierWrapper
