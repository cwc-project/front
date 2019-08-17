import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Eye, EyeOff, User } from 'react-feather';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Alert,
  Spinner,
} from 'reactstrap';
import './RegForm.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  form: ['p-1'],
  formGroup: ['mb-1'],
  btn: ['float-right', 'mt-3'],
  passToggleBtn: ['btn', 'btn-light', 'border-0', 'shadow-none'],
  alert: ['overflow-hidden', 'text-truncate'],
  nameIconWrap: ['input-group-text'],
  passIconWrap: ['input-group-text', 'p-0'],
};
const form = classNames(bsUtilClasses.form);
const formGroup = classNames(bsUtilClasses.formGroup);
const btn = classNames(bsUtilClasses.btn);
const passToggleBtn = classNames(bsUtilClasses.passToggleBtn);
const alert = classNames(bsUtilClasses.alert);
const nameIconWrap = classNames(bsUtilClasses.nameIconWrap);
const passIconWrap = classNames(bsUtilClasses.passIconWrap);

export default function RegForm(props) {
  const {
    props: {
      id,
      btnValue,
      validation,
      optionFileds,
      nameFeedback,
      emailFeedback,
      passFeedback,
      emailInfo,
      loading,
    },
    state: { name, email, pass, err },
    handleChange,
    passToggle,
    handleSubmit,
  } = props;

  const nameCheck = classNames({
    'is-valid': validation && name.valid === true,
    'is-invalid': validation && name.valid === false,
  });
  const emailCheck = classNames({
    'is-valid': validation && email.valid === true,
    'is-invalid': validation && email.valid === false,
  });
  const passCheck = classNames({
    'is-valid': validation && pass.valid === true,
    'is-invalid': validation && pass.valid === false,
  });

  return (
    <Form className={form} onSubmit={handleSubmit}>
      <fieldset disabled={loading ? 'disabled' : ''}>
        {optionFileds === 'name' ? (
          <FormGroup className={formGroup}>
            <Label for={`${id}name`}>Name*</Label>
            <InputGroup>
              <Input
                type="text"
                className={nameCheck}
                id={`${id}name`}
                name="name"
                value={name.value}
                onChange={handleChange}
                required
              />
              <InputGroupAddon addonType="append" className="append">
                <span className={nameIconWrap}>
                  <User className="input-addon-icon" />
                </span>
              </InputGroupAddon>
              {nameFeedback ? (
                <FormFeedback>{nameFeedback}</FormFeedback>
              ) : (
                false
              )}
            </InputGroup>
          </FormGroup>
        ) : (
          ''
        )}
        <FormGroup className={formGroup}>
          <Label for={`${id}Email`}>E-mail*</Label>
          <InputGroup>
            <Input
              type="email"
              className={emailCheck}
              id={`${id}Email`}
              name="email"
              value={email.value}
              onChange={handleChange}
              required
            />
            <InputGroupAddon addonType="append" className="append">
              @
            </InputGroupAddon>
            {emailFeedback ? (
              <FormFeedback>{emailFeedback}</FormFeedback>
            ) : (
              false
            )}
          </InputGroup>
          {emailInfo ? <FormText>{emailInfo}</FormText> : false}
        </FormGroup>
        <FormGroup className={formGroup}>
          <Label for={`${id}Pass`}>Password*</Label>
          <InputGroup>
            <Input
              type={pass.hide ? 'password' : 'text'}
              className={passCheck}
              id={`${id}Pass`}
              name="pass"
              value={pass.value}
              onChange={handleChange}
              required
            />
            <InputGroupAddon addonType="append" className="append">
              <span className={passIconWrap}>
                <button
                  color="link"
                  type="submit"
                  onClick={passToggle}
                  className={passToggleBtn}
                >
                  {pass.hide ? (
                    <EyeOff className="input-addon-icon" />
                  ) : (
                    <Eye className="input-addon-icon" />
                  )}
                </button>
              </span>
            </InputGroupAddon>
            {passFeedback ? <FormFeedback>{passFeedback}</FormFeedback> : false}
          </InputGroup>
        </FormGroup>
        {err ? (
          <Alert color="danger" className={alert}>
            {err}
          </Alert>
        ) : (
          ''
        )}
        <Button color="primary" outline className={btn}>
          {loading ? (
            <Fragment>
              <Spinner color="primary" size="sm" />
              &nbsp;Loading ...
            </Fragment>
          ) : (
            btnValue
          )}
        </Button>
      </fieldset>
    </Form>
  );
}

RegForm.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    optionFileds: PropTypes.oneOf(['name']),
    btnValue: PropTypes.string,
    validation: PropTypes.bool,
    nameFeedback: PropTypes.string,
    emailFeedback: PropTypes.string,
    passFeedback: PropTypes.string,
    emailInfo: PropTypes.string,
    loading: PropTypes.bool,
  }),
  state: PropTypes.shape({
    name: PropTypes.shape({
      value: PropTypes.string.isRequired,
      valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    }).isRequired,
    email: PropTypes.shape({
      value: PropTypes.string.isRequired,
      valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    }).isRequired,
    pass: PropTypes.shape({
      value: PropTypes.string.isRequired,
      valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
      hide: PropTypes.bool.isRequired,
    }).isRequired,
    err: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  passToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

RegForm.defaultProps = {
  props: {
    btnValue: 'submit',
  },
};
