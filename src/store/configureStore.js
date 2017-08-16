if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configStore.prod');
} else {
  module.exports = require('./configStore.dev');
}

/* NOTE:
  Dynamic imports aren't support by ES6,
  so we use require instead of import.
 */
