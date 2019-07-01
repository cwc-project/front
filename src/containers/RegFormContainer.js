import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logUser } from '../actions'
import RegForm from '../components/RegForm'
import axios from 'axios'


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
    }

     handleChange = ( { target: { name, value}} ) => {      
        this.setState(prevState => ({ 
            ...prevState,     
            [name]: {        
                ...prevState[name],        
                value,
                valid: this.props.validation ? this.handleCheck(name, value) : true,
            }
        }))
    }

    handleCheck(name, value) {
        return this.regExp(name).test(value)
    }

    regExp(name) {
        switch (name) {
            case 'email':
                return /^[a-z0-9]+[\w-\.]*\@[a-z0-9]+[\w-\.]*\.[a-z]{2,3}/i;
            case 'pass':
                return /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i;
            default:
                break;
        }
    }

    passToggle = event => {
        // const { pass: { hide} } = this.state
        // this.setState({ pass: { ...this.state.pass, hide: !hide} })
        // const pass = {...this.state.pass}
        
        const { pass } = this.state
        this.setState({pass: {...pass, hide: !pass.hide}})
        event.preventDefault()
    }
    
    handleSubmit = event => {
        const { email, pass } = this.state
        const { logUser } = this.props
        event.preventDefault()
        if (email.valid && pass.valid) {
            console.log('good')
           logUser()
        } else {
            console.log('invalid')
        }
    }

    render() {
        return(
            <RegForm 
                props={this.props}
                state={this.state}
                handleChange={this.handleChange}
                passToggle={this.passToggle}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.rsEffects.modal,
    }    
}

function mapDispatchToProps(dispatch) {
    return {
        logUser: () => dispatch(logUser()),
    }    
}

export default connect(null, mapDispatchToProps)(RegFormContainer)



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