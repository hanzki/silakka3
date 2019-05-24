/**
 * Jest test configuration
 *
 * @see https://jestjs.io/
 */
module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules', 'test'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules']
}
