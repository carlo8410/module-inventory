module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/acceptance/steps/**/*.ts'],
    paths: ['tests/acceptance/features/**/*.feature'],
    format: ['progress']
  }
};
