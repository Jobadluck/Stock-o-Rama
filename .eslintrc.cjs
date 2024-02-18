/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint',
    'plugin:svelte/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'no-only-tests'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte', '*.ts', '*.js'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'on', // don't matter line ending style
    indent: ['error', 2], // indent with 2 spaces
    quotes: ['error', 'single'], // force single quotes
    semi: ['error', 'never'], // remove semicolons
    eqeqeq: 'warn', // require === and !==
    'default-case': 'warn', // require default case in switch statements
    'no-implicit-coercion': 'warn', // disallows implicit type conversion methods
    curly: ['error', 'all'],
    yoda: 'warn', // requires 'yoda' condition statements
    'no-var': 'warn', // requires let or const, not var
    'no-only-tests/no-only-tests': 'error',
    'no-trailing-spaces': 'error',
    "eol-last": "off",
    "prettier/prettier": "error",
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
  }
}
