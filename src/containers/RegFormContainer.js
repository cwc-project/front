import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as userActions from '../actions/userActions';
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
      },
      hidePass: true,
    };

    this.regExps = {
      name: /.{1,}/i,
      email: /^[a-z0-9]+[\w-.]*@[a-z0-9]+[\w-.]*\.[a-z]{2,3}/i,
      pass: /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    // const { validation } = this.props;
    // возможность ввести имя и отчество через пробел
    const trimVal = name !== 'name' ? value.trim() : value;

    this.setState((state, props) => ({
      [name]: {
        value,
        valid: props.validation ? this.handleCheck(name, trimVal) : true,
      },
    }));
  };

  passToggle = () =>
    this.setState(prevState => ({ hidePass: !prevState.hidePass }));

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

    let input = {
      email: email.value.toLowerCase().trim(),
      pass: pass.value.trim(),
    };

    if (type === 'log') {
      this.submitAction(login, input);
      return;
    }

    if (type === 'reg') {
      input = { ...input, name: name.value.trim() };
      this.submitAction(reg, input);
    }
  };

  submitAction = (action, data) => {
    const { history } = this.props;
    action(data, history);
  };

  handleCheck = (name, value) => this.regExps[name].test(value.trim());

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

const mapStateToProps = ({ fetch }) => ({ loading: fetch.loading.user });

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
