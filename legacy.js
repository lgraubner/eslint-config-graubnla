module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
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
