import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userActions from '../actions/user';

import RegForm from '../components/RegForm';

class RegFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        valid: '',
      },
      email: {
        value: '',
        valid: '',
      },
      pass: {
        value: '',
        valid: '',
        hide: true,
      },
      err: '',
    };

    this.regExps = {
      name: /.{1,}/i,
      email: /^[a-z0-9]+[\w-.]*@[a-z0-9]+[\w-.]*\.[a-z]{2,3}/i,
      pass: /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i,
    };
  }

  handleError = err => this.setState({ err });

  handleChange = ({ target: { name, value } }) => {
    const { ...state } = this.state;
    const { validation } = this.props;
    const trimVal = value.trimStart();
    if (state[name]) {
      this.setState(prevState => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          value: trimVal,
          valid: validation ? this.handleCheck(name, trimVal) : true,
        },
      }));
    }
  };

  passToggle = event => {
    const { pass } = this.state;
    this.setState({ pass: { ...pass, hide: !pass.hide } });
    event.preventDefault();
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, pass } = this.state;
    if (!email.valid || !pass.valid) {
      return;
    }
    const {
      userActions: { login, reg },
      type,
    } = this.props;

    if (type === 'reg' && name.valid) {
      const trimedName = name.value.trimEnd();
      reg(trimedName, email.value, pass.value, this.handleError);
      return;
    }

    if (type === 'log') {
      login(email.value, pass.value, this.handleError);
    }
  };

  handleCheck = (name, value) => this.regExps[name].test(value);

  render() {
    return (
      <RegForm
        props={this.props}
        state={this.state}
        handleChange={this.handleChange}
        passToggle={this.passToggle}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegFormContainer);

RegFormContainer.propTypes = {
  validation: PropTypes.bool,
  type: PropTypes.oneOf(['log', 'reg']).isRequired,
  userActions: PropTypes.shape({
    reg: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }).isRequired,
};

RegFormContainer.defaultProps = {
  validation: false,
};
