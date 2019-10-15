module.exports = {
  '*.js?(x)': [
    'eslint --fix --color --ignore-path .gitignore',
    'git add',
    'jest --passWithNoTests --color',
  ],
  '*.{css}': [
    'stylelint src/**/*.css --fix --ignore-path .gitignore',
    'prettier --write --ignore-path .gitignore',
    'git add',
  ],
  '*.{html,json,md}': [
    'prettier --write --ignore-path .gitignore',
    'git add',
  ],
};
