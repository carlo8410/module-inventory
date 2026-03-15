module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'allure-jest/node',
  testMatch: ['**/tests/unit/**/*.test.ts'],
  testEnvironmentOptions: {
    resultsDir: './allure-results',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
