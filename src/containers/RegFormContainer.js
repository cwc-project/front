import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
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

  handleError = err => {
    // console.log(err.response);
    let error = err.response ? err.response.data : err;

    if (error.formatErr) {
      const {
        nameErr = false,
        emailErr = false,
        passErr = false,
      } = err.response.data.formatErr;
      const { name, email, pass } = this.state;

      this.setState({
        name: { ...name, valid: !nameErr },
        email: { ...email, valid: !emailErr },
        pass: { ...pass, valid: !passErr },
      });
    } else {
      error = typeof error.error === 'string' ? error.error : err.toString();
      this.setState({ err: error });
    }
  };

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
    const {
      type,
      userActions: { login, reg },
    } = this.props;
    if (!email.valid || !pass.valid || (!name.valid && type === 'reg')) {
      return;
    }

    let account = {
      email: email.value.toLowerCase(),
      pass: pass.value,
    };

    if (type === 'log') {
      this.submitAction(login, account);
      return;
    }

    if (type === 'reg') {
      account = Object.assign({ name: name.value.trimEnd() }, account);
      this.submitAction(reg, account);
    }
  };

  submitAction = (action, data) => {
    const { history } = this.props;
    action(data, history, this.handleError);
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(RegFormContainer);

RegFormContainer.propTypes = {
  validation: PropTypes.bool,
  type: PropTypes.oneOf(['log', 'reg']).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.object,
  }).isRequired,
  userActions: PropTypes.shape({
    reg: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }).isRequired,
};

RegFormContainer.defaultProps = {
  validation: false,
};
