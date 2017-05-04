##### *DEPRECATED - This repository is deprecated and will not be updated anymore. Use at your own risk.*

# eslint-config-graubnla

[![npm](https://img.shields.io/npm/v/eslint-config-graubnla.svg)](https://www.npmjs.com/package/eslint-config-graubnla)

This is basicly a fork of `eslint-config-airbnb` with some personal tweaks.

**This config is using ESLint 2**

## Usage

This package exports three ESLint configurations.

### eslint-config-graubnla

Default ESLint rules, including ES2015 and react. It requires `eslint` and `eslint-plugin-react`.

1. `npm install -D eslint-config-graubnla eslint-plugin-react eslint`
2. Add `"extends": "graubnla"` to your `.eslintrc`

### eslint-config-graubnla/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm insatll -D eslint-config-graubnla eslint`
2. Add `"extends": "graubnla/base"` to your `.eslintrc`

### eslint-config-graubnla/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm insatll -D eslint-config-graubnla eslint`
2. Add `"extends": "graubnla/base"` to your `.eslintrc`
