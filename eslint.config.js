// eslint.config.js

import stylistic from "@stylistic/eslint-plugin";

export default [
  stylistic.configs.customize({
    // the following options are the default values
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: true,
    trailingComma: "none",
    // ...
  }),
  // ...you other config items
]
