// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  root: true,
  rules: {
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/typedef': 2,
  },
}
