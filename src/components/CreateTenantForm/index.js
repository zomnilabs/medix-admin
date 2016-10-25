import React, { Component } from 'react';
import TextInput from '../TextInput';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';
import validator from 'validator';
import RaisedButton from 'material-ui/RaisedButton';

export const fields = ['plan', 'first_name', 'last_name', 'company_name',
    'contact_number', 'company_address', 'email', 'tenant', 'country_code'];

const validate = values => {
    const errors = {};
    const requiredFields = [ 'plan', 'first_name', 'last_name', 'company_name',
        'contact_number', 'company_address', 'email', 'tenant', 'country_code' ];

    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = "This field is required";
        }
    });

    if(values.email && !validator.isEmail(values.email)){
        errors.email = "Invalid Email Address";
    }

    return errors
};

const footerStyle = {
    boxSizing: 'border-box',
    padding: '8px',
    width: '100%',
    textAlign: '100%',
    marginTop: '-1px',
    borderTop: '1px solid rgb(224, 224, 224)'
};

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        fullWidth={true}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}/>
);

class CreateTenantForm extends Component {

    render() {
        const {
            handleSubmit,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field name="tenant" component={TextInput}
                       id="tenant"
                       type="text"
                       label="Tenant"
                       hintText="Input your tenant" />

                <Field name="first_name" component={TextInput}
                       type="text"
                       id="first_name"
                       label="First Name"
                       hintText="Input your first name" />

                <Field name="last_name" component={TextInput}
                       type="text"
                       id="last_name"
                       label="Last Name"
                       hintText="Input your last name" />

                <Field name="company_name" component={TextInput}
                       type="text"
                       id="company_name"
                       label="Company Name"
                       hintText="Input your company name" />

                <Field name="company_address" component={TextInput}
                       type="text"
                       id="company_address"
                       label="Company Address"
                       hintText="Input your company address" />

                <Field name="contact_number" component={TextInput}
                       type="text"
                       id="contact_number"
                       label="Contact Number"
                       hintText="Input your contact number" />

                <Field name="email" component={TextInput}
                       type="email"
                       id="email"
                       label="Email"
                       hintText="Input your email" />

                <Field name="plan" component={renderSelectField}
                       type="text"
                       id="plan"
                       label="Plan"
                       hintText="Select plan">

                    <MenuItem value={'trial'} primaryText="Trial" />
                    <MenuItem value={'lite'} primaryText="Lite" />
                    <MenuItem value={'premium'} primaryText="Premium" />
                </Field>

                <Field name="country_code" component={renderSelectField}
                       id="country_code"
                       label="Country Code"
                       hintText="Select country code">

                    <MenuItem value={'ph'} primaryText="PH (Philippines)" />
                    <MenuItem value={'mu'} primaryText="MU (Mauritius)" />
                </Field>

                <RaisedButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleCloseDialog}
                />

                <RaisedButton
                    type="submit"
                    label="Save"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={this.handleCloseDialog}
                />
            </form>
        )
    }
}

// Bind login form to redux form
export default reduxForm({
    form: 'CreateTenantForm',
    validate,
    fields
})(CreateTenantForm);