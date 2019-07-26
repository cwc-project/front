module.exports = {
  '*.{js,jsx}': ['eslint --fix --color', 'git add'],
  '*.{css}': ['stylelint src/**/*.css --fix', 'git add'],
  '*.{html,css,json,md}': ['prettier --write', 'git add'],
};
