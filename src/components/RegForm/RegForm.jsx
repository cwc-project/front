import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Eye, EyeOff, User } from 'react-feather';
import {
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import './RegForm.css';
import ErrorContainer from '../../containers/ErrorContainer';
import BtnSubmitContainer from '../../containers/BtnSubmitContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  form: ['p-1'],
  formGroup: ['mb-1'],
  passToggleBtn: ['btn', 'btn-light', 'border-0', 'shadow-none'],
  alert: ['overflow-hidden', 'text-truncate'],
  nameIconWrap: ['input-group-text'],
  passIconWrap: ['input-group-text', 'p-0'],
};
const form = classNames(bsUtilClasses.form);
const formGroup = classNames(bsUtilClasses.formGroup);

const passToggleBtn = classNames(bsUtilClasses.passToggleBtn);
const nameIconWrap = classNames(bsUtilClasses.nameIconWrap);
const passIconWrap = classNames(bsUtilClasses.passIconWrap);

const RegForm = props => {
  const {
    props: {
      id,
      type,
      btnValue,
      validation,
      optionFileds,
      nameFeedback,
      emailFeedback,
      passFeedback,
      emailInfo,
      loading,
    },
    state: { name, email, pass, hidePass },
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
      <fieldset disabled={loading}>
        {optionFileds === 'name' && (
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
              <InputGroupAddon addonType="append" className="reg-form_append">
                <span className={nameIconWrap}>
                  <User className="reg-form_input-addon-icon" />
                </span>
              </InputGroupAddon>
              <FormFeedback>{nameFeedback}</FormFeedback>
            </InputGroup>
          </FormGroup>
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
            <InputGroupAddon addonType="append" className="reg-form_append">
              @
            </InputGroupAddon>
            <FormFeedback>{emailFeedback}</FormFeedback>
          </InputGroup>
          {emailInfo ? <FormText>{emailInfo}</FormText> : false}
        </FormGroup>
        <FormGroup className={formGroup}>
          <Label for={`${id}Pass`}>Password*</Label>
          <InputGroup>
            <Input
              type={hidePass ? 'password' : 'text'}
              className={passCheck}
              id={`${id}Pass`}
              name="pass"
              value={pass.value}
              onChange={handleChange}
              required
            />
            <InputGroupAddon addonType="append" className="reg-form_append">
              <span className={passIconWrap}>
                <button
                  color="link"
                  type="button"
                  onClick={passToggle}
                  className={passToggleBtn}
                >
                  {hidePass ? (
                    <EyeOff className="reg-form_input-addon-icon" />
                  ) : (
                    <Eye className="reg-form_input-addon-icon" />
                  )}
                </button>
              </span>
            </InputGroupAddon>
            <FormFeedback>{passFeedback}</FormFeedback>
          </InputGroup>
        </FormGroup>
        <ErrorContainer type={type} />
        <BtnSubmitContainer btnValue={btnValue} type="user" />
      </fieldset>
    </Form>
  );
};

RegForm.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['log', 'reg']).isRequired,
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
    }).isRequired,
    hidePass: PropTypes.bool.isRequired,
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

export default memo(RegForm);
