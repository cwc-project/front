import React from 'react';
import classNames from 'classnames';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  footer: ['mt-5'],
  hr: ['w-75'],
  copy: ['text-muted', 'text-center', 'mt-4'],
};
const footer = classNames(bsUtilClasses.footer);
const hr = classNames(bsUtilClasses.hr);
const copy = classNames(bsUtilClasses.copy);

const Footer = () => (
  <footer className={footer}>
    <hr className={hr} />
    <p className={copy}>&copy; 2018-2019 CWC-project</p>
  </footer>
);

export default Footer;
