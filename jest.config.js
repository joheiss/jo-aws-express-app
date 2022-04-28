module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.js'],
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'test/test-reports',
      outputName: 'test-report.xml',
    } ]
  ]  
};
