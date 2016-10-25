import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi, postSessionApi } from '../../actions/session';
import { gotoDashboard } from '../../actions/redirect';
import LoginForm from '../../components/LoginForm';
import BigLogo from '../../components/BigLogo';

import './style.css';

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
            <div className="row center-xs" id="loginContainer">
                <div className="col-xs-6">

                    <div className="row center-xs">
                        <div className="col-xs-6" id="logoContainer">
                            <BigLogo />
                        </div>
                    </div>

                    <LoginForm onSubmit={this.handleSubmit} />
                </div>
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