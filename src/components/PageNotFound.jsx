import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import RegModalContainer from '../containers/RegModalContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  text: ['mb-4'],
};
const text = classNames(bsUtilClasses.text);

const PageNotFound = () => (
  <>
    <Link to="/" replace>
      <h5>Go to Home page</h5>
    </Link>
    <div className={text}>404 PAGE NOT FOUND</div>
    <RegModalContainer />
  </>
);

export default PageNotFound;
