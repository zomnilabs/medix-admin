import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi, postSessionApi } from '../../actions/session';
import { gotoDashboard } from '../../actions/redirect';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        getSessionApi: PropTypes.func.isRequired,
        postSessionApi: PropTypes.func.isRequired,
        gotoDashboard: PropTypes.func.isRequired
    };

    handleSubmit = values => {
        this.props.postSessionApi(values);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.session.get('isAuth')) {
            this.props.gotoDashboard();
        }
    }

    render() {
        return (
            <div>
                Login Page
                <LoginForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, {
    getSessionApi,
    postSessionApi,
    gotoDashboard
})(Login);