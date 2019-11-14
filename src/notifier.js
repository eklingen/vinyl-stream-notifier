// Small vinyl-stream wrapper -aka Gulp plugin- for node-nodifier.

const { join } = require('path')

function nodeNotifierWrapper (options = {}, callback = () => {}) {
  const notifier = require('node-notifier')

  const DEFAULTS = {
    error: { title: '😱 Oh no!', icon: join(__dirname, '..', 'images', 'icon.png'), sound: false },
    regular: { title: '🧐 Pay attention!', icon: join(__dirname, '..', 'images', 'icon.png'), sound: false }
  }

  const reporter = notifier.notify.bind(notifier)

  const report = function (object, options = {}) {
    const result = ({ ...(object instanceof Error) ? DEFAULTS.error : DEFAULTS.regular, ...{ title: options.title || '', subtitle: options.subtitle || '', message: options.message || object.message || object.formatted || object.relativePath || object.fileName || object, open: options.open || '' }})

    console.log(`${result.title ? result.title + '\n' : ''}${result.subtitle ? result.subtitle + '\n' : ''}${object.formatted || result.message}`)
    result.message = (object.formatted || result.message).replace(/\\x1b[@-_][0-?]*[ -/]*[@-~]/gi, '') // Strip ANSI codes

    reporter(result, error => callback(error ? new Error(error) : null))
  }

  return error => report(error, options, () => callback(error))
}

module.exports = nodeNotifierWrapper
