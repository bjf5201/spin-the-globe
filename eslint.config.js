// eslint.config.js

import stylistic from "@stylistic/eslint-plugin";

export default {
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  plugins: ["@stylistic"],
  rules: {
    "@stylistic/indent": ["error", 2],
    "@stylistic/semi": "error",
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/exports-last": "error",
    "@stylistic/exports-order": ["error", { "default": 0, "named": 1 }],
    "@stylistic/imports-last": "error",
    "@stylistic/imports-order": ["error", { "builtin": 0, "external": 1, "internal": 2, "parent": 3, "sibling": 4 }],
    "@stylistic/quote-props": ["error", "as-needed", { "numbers": true, "keywords": true }],
    "@stylistic/array-bracket-spacing": "always",
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": "error",
    "@stylistic/brace-style": "error",
    "@stylistic/comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "@stylistic/comma-spacing": "error",
    "@stylistic/comma-style": "error",
    "@stylistic/function-paren-newline": ["error", { "minItems": 3 }],
  }
}