import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  text: ['mb-4'],
};

const text = classNames(bsUtilClasses.text);

export default function PageNotFound() {
  return (
    <>
      <div className={text}>404 PAGE NOT FOUND</div>
      <Link to="/" replace>
        Go to Home page
      </Link>
    </>
  );
}
