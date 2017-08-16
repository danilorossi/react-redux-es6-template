if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

/* NOTE:
  Dynamic imports aren't support by ES6,
  so we use require instead of import.
 */
