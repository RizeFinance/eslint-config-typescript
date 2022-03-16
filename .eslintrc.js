// ESLINT: https://eslint.org/docs/rules/
// TSLINT: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

// Add Extends
// 'plugin:import/errors'
// 'plugin:react/recommended'

// Add/Update/Remove Rule
// "@typescript-eslint/explicit-module-boundary-types": "error"
// "@typescript-eslint/no-unused-vars": "on",

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint-config-prettier"
  ],
  plugins: [
    "react-hooks",
    "@emotion/eslint-plugin",
    "@typescript-eslint/eslint-plugin"
  ],
  rules: {
    "strict": ["error", "never"],
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-case-declarations": "warn",
    "no-else-return": "error",
    "no-multi-spaces": "error",
    "eol-last": 2,
    "eqeqeq": 2,
    "no-fallthrough": [
      "warn",
      {
        "commentPattern": "falls through"
      }
    ],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};
