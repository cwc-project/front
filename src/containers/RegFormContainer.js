import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logUser } from '../actions';
import RegForm from '../components/RegForm';

class RegFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      email: /^[a-z0-9]+[\w-.]*@[a-z0-9]+[\w-.]*\.[a-z]{2,3}/i,
      pass: /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i,
    };
  }

  handleError = err => {
    this.setState({ err });
  };

  handleChange = ({ target: { name, value } }) => {
    const { ...state } = this.state;
    const { validation } = this.props;
    this.setState(prevState => ({ count: prevState.count + 1 }));

    if (state[name]) {
      this.setState(prevState => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          value,
          valid: validation ? this.handleCheck(name, value) : true,
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
    const { email, pass } = this.state;
    const { onLogUser } = this.props;
    event.preventDefault();
    if (email.valid && pass.valid) {
      onLogUser(email.value, pass.value, this.handleError);
    }
  };

  handleCheck(name, value) {
    return this.regExps[name].test(value);
  }

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
  err: state.user.err,
});

const mapDispatchToProps = dispatch => ({
  onLogUser: (email, password, callback) => {
    dispatch(logUser(email, password, callback));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegFormContainer);

RegFormContainer.propTypes = {
  validation: PropTypes.bool,
  onLogUser: PropTypes.func.isRequired,
};

RegFormContainer.defaultProps = {
  validation: false,
};
