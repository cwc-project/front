import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button, Spinner } from 'reactstrap';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  btn: ['float-right', 'mt-3'],
};
const btn = classNames(bsUtilClasses.btn);

// перед закрытием модальной формы, кнопка снова активна из-за fade
const BtnSubmitContainer = ({ btnValue, loading }) => (
  <Button
    color="primary"
    type="submit"
    outline
    className={btn}
    disabled={loading}
  >
    {loading ? (
      <>
        <Spinner color="primary" size="sm" />
        &nbsp;Loading ...
      </>
    ) : (
      btnValue
    )}
  </Button>
);

BtnSubmitContainer.propTypes = {
  btnValue: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  type: PropTypes.oneOf(['user', 'projects', 'project']).isRequired,
};

BtnSubmitContainer.defaultProps = {
  btnValue: 'submit',
};

const mapStateToProps = ({ fetch }, { type }) => ({
  loading: fetch.loading[type],
});

export default connect(mapStateToProps)(BtnSubmitContainer);
