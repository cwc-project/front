import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { 
    Eye,
    EyeOff,
} from 'react-feather'
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
} from 'reactstrap'
import './RegForm.css'

//использование встроенных стилей bootstrap
const  bsUtilClasses = {
    form: ['p-1'],
    formGroup: ['mb-1'],
    btn: ['float-right', 'mt-3'],
    passToggleBtn: ['btn', 'btn-light', 'border-0', 'shadow-none' ],    
}
const form = classNames(bsUtilClasses.form)
const formGroup = classNames(bsUtilClasses.formGroup)
const btn = classNames(bsUtilClasses.btn)
const passToggleBtn = classNames(bsUtilClasses.passToggleBtn)

export default function RegForm(props) {
    const {
        props: {
            id,
            btnValue,
            validation,
            emailFeedback,
            passFeedback,
            emailInfo,
            
        },
        state: {
            email,
            pass,
        },
        handleChange,   
        passToggle,  
        handleSubmit,       
    } = props
    const emailCheck = classNames((email.valid === '') || !validation ? '' : (email.valid ? 'is-valid' : 'is-invalid'))
    const passCheck = classNames((pass.valid === '') || !validation ? '' : (pass.valid ? 'is-valid' : 'is-invalid'))
    return(
        <Form className={form} onSubmit={handleSubmit}>
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
                    <InputGroupAddon addonType="append" className="append">@</InputGroupAddon>
                    {emailFeedback ? <FormFeedback>{emailFeedback}</FormFeedback> : false}                     
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
                        <span className="input-group-text p-0">
                        <button 
                            color="link"
                            onClick={passToggle}
                            className={passToggleBtn}
                        >
                            {pass.hide ? <EyeOff className="pass-icon" /> : <Eye className="pass-icon" />}
                        </button>
                        </span>
                    </InputGroupAddon>
                    {passFeedback ? <FormFeedback>{passFeedback}</FormFeedback> : false} 
                </InputGroup>                 
            </FormGroup>
            <Button 
                color="primary" 
                outline
                className={btn}
            >{btnValue}</Button>
        </Form>
    )
}

RegForm.propTypes = {
    props: PropTypes.shape({        
        id: PropTypes.string.isRequired,
        // type: PropTypes.oneOf(['log', 'reg']).isRequired,
        btnValue: PropTypes.string,
        validation: PropTypes.bool,
        emailFeedback: PropTypes.string,
        passFeedback: PropTypes.string,
        emailInfo: PropTypes.string,
    }),
    state: PropTypes.shape({
        email: PropTypes.shape({
            value: PropTypes.string.isRequired,
            valid: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.bool,
            ]).isRequired,
        }),
        pass: PropTypes.shape({
            value: PropTypes.string.isRequired,
            valid: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.bool,
            ]).isRequired,
            hide: PropTypes.bool.isRequired,
        }),
    }),
    handleChange: PropTypes.func.isRequired,
}

RegForm.defaultProps = {
    btnValue: 'submit',
};