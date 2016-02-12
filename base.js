module.exports = {
  extends: [
    './legacy',
    './rules/es6',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  ecmaFeatures: {},
  globals: {},
  rules: {},
};
