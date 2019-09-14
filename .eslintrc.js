module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'airbnb',
  plugins: ['babel', 'prettier'],
  rules: {
    // 2 - error, 1 - warning, 0 - off
    'prettier/prettier': 'error', // mark prettier definitions as error
    'arrow-parens': [2, 'as-needed'], // for compatablility with prettier
    'arrow-body-style': [2, 'as-needed'],
    'object-curly-newline': [2, { consistent: true }], // open prettier issue https://github.com/prettier/prettier/issues/2550
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // allow to check jsx markup in .js and .jsx files (by default: only .jsx)
  },
};
