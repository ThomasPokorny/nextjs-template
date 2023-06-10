module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    //TODO remove after basic implementations!!
    '@typescript-eslint/no-empty-function': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
