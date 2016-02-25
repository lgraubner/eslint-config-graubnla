module.exports = {
  extends: [
    './legacy',
    './rules/es6',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: true,
    mocha: true,
  },
  parserOptions: {},
  globals: {},
  rules: {},
};
