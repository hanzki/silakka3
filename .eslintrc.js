/**
 * ESLint config
 *
 * @see https://eslint.org/
 */
module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    jest: true,
    node: true
  },
  rules: {
    'no-console': 'warn',
    camelcase: 0
  }
}
