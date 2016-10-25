import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSessionApi } from '../../actions/session';
import { gotoLogin } from '../../actions/redirect';
import Toolbar from '../../components/Toolbar';
import Drawer from '../../components/Drawer';

class Dashboard extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        getSessionApi: PropTypes.func.isRequired,
        gotoLogin: PropTypes.func.isRequired
    };

    state = {
        drawer: false
    };

    checkSession = (props) => {
        if (! props.session.get('isAuth')) {
            this.props.gotoLogin();
        }
    };

    handleDrawerToggle = () => this.setState({drawer: !this.state.drawer});

    componentDidMount() {
        this.checkSession(this.props)
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.drawer} onDrawerToggle={this.handleDrawerToggle} />
                <Toolbar onDrawerToggle={this.handleDrawerToggle} />
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