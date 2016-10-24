import React, { Component } from 'react';
import TextInput from '../TextInput';
import { Field, reduxForm } from 'redux-form';
import validator from 'validator';
import RaisedButton from 'material-ui/RaisedButton';

export const fields = ['username', 'password'];

const validate = values => {
    const errors = {};
    const requiredFields = [ 'username', 'password' ];

    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = "form.fieldRequired";
        }
    });

    if(values.username && !validator.isEmail(values.username)){
        errors.username = "form.usernameInvalid";
    }

    return errors
};


class LoginForm extends Component {

    render() {
        const {
            invalid,
            dirty,
            handleSubmit,
            session
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field name="username" component={TextInput}
                    id="username"
                    type="text"
                    label="Email"
                    hintText="Input your username" />

                <Field name="password" component={TextInput}
                       type="password"
                       id="password"
                       label="Password"
                       hintText="Input your password" />

                <RaisedButton label="Login" primary={true} type="submit" />
            </form>
        )
    }
}

// Bind login form to redux form
export default reduxForm({
    form: 'LoginForm',
    validate,
    fields
})(LoginForm);