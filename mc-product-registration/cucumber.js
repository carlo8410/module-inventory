module.exports = {
  default: {
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    require: ['tests/acceptance/steps/**/*.ts'],
    paths: ['tests/acceptance/features/**/*.feature'],
    format: ['progress', 'summary', 'allure-cucumberjs/reporter'],
    formatOptions: {
      resultsDir: './allure-results',
    },
  },
};
