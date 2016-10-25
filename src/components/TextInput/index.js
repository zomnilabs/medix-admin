import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {
    const { hintText, id, name, label, type, input, meta: { touched, error } } = props;

    let className = '';
    if (props.className) {
        className = props.className;
    }

    return (
        <TextField
            {...input}
            errorText={touched && error}
            hintText={hintText}
            label={label}
            id={id}
            name={name}
            fullWidth={true}
            className={className}
            type={type}
        />
    )
};

TextInput.propTypes = {
    hintText: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default TextInput;