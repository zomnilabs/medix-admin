import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi } from '../../actions/session';
import { gotoLogin } from '../../actions/redirect';
import Toolbar from '../../components/Toolbar';

class Dashboard extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        getSessionApi: PropTypes.func.isRequired,
        gotoLogin: PropTypes.func.isRequired
    };

    checkSession = (props) => {
        if (! props.session.get('isAuth')) {
            this.props.gotoLogin();
        }
    };

    componentDidMount() {
        this.checkSession(this.props)
    }

    render() {
        return (
            <div>
                <Toolbar/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session
});

export default connect(mapStateToProps, {
    getSessionApi,
    gotoLogin
})(Dashboard);