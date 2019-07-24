module.exports = {
  '*.{js,jsx}': ['eslint --fix --color', 'git add'],
  '*.{html,css,json,md}': ['prettier --write', 'git add'],
};
