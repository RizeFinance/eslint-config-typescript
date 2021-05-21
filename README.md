# Rize ESLint Typescript Config [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://investorjunkie.com/wp-content/uploads/2017/11/rize-2.png" width="160" align="right" alt="eslint">](http://eslint.org)

> A list of awesome ESLint configs, plugins, etc.



## Installation

```bash
$ npm install --save-dev @rizefinance/eslint-config-typescript --registry=https://npm.pkg.github.com
```

```bash
$ yarn add -D @rizefinance/eslint-config-typescript --registry=https://npm.pkg.github.com
```



## Usage

Once the `@rizefinance/eslint-config-typescript` package is installed, you can use it by specifying `eslint-config-typescript` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "@rizefinance/eslint-config-typescript",
  "rules": {
    // Additional, per-project rules...
  }
}
```

