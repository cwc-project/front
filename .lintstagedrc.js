module.exports = {
  '*.{js,jsx}': ['eslint --fix --color --ignore-path .gitignore', 'git add'],
  '*.{css}': ['stylelint src/**/*.css --fix', 'git add'],
  '*.{html,css,json,md}': ['prettier --write --ignore-path .gitignore', 'git add'],
};
