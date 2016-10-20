import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi } from '../actions/session';

class Login extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        getSessionApi: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                Login Page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, {
    getSessionApi
})(Login);