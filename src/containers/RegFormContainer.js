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
    };

    this.regExps = {
      email: /^[a-z0-9]+[\w-.]*@[a-z0-9]+[\w-.]*\.[a-z]{2,3}/i,
      pass: /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i,
    };
  }

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
    // const { pass: { hide} } = this.state
    // this.setState({ pass: { ...this.state.pass, hide: !hide} })
    // const pass = {...this.state.pass}
    const { pass } = this.state;
    this.setState({ pass: { ...pass, hide: !pass.hide } });
    event.preventDefault();
  };

  handleSubmit = event => {
    const { email, pass } = this.state;
    const { onLogUser } = this.props;
    event.preventDefault();
    if (email.valid && pass.valid) {
      // console.log('good');
      onLogUser();
    } else {
      // console.error('invalid');
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

function mapDispatchToProps(dispatch) {
  return {
    onLogUser: () => dispatch(logUser()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(RegFormContainer);

RegFormContainer.propTypes = {
  validation: PropTypes.bool,
  onLogUser: PropTypes.func.isRequired,
};

RegFormContainer.defaultProps = {
  validation: false,
};

// handleChange = ( { target: { name, value}} ) => {
//     this.setState(prevState => ({
//         ...prevState,
//         [name]: {
//             ...prevState[name],
//             value,
//         }})
//     )
//     this.handleCheck(name, value)
// }
// handleCheck(name, value) {
//     const valid = this.regExp(name).test(value)
//     this.setState(prevState => ({
//         ...prevState,
//         [name]: {
//             ...prevState[name],
//             valid,
//         }})
//     )
// }

// regExp(name) {
//   switch (name) {
//     case 'email':
//       return /^[a-z0-9]+[\w-\.]*\@[a-z0-9]+[\w-\.]*\.[a-z]{2,3}/i;
//     case 'pass':
//       return /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i;
//     default:
//       break;
//   }
// }
