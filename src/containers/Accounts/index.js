import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { gotoLogin } from '../../actions/redirect';
import { getAccountsApi } from '../../actions/accounts';
import Toolbar from '../../components/Toolbar';
import Drawer from '../../components/Drawer';
import DataGrid from '../../components/DataGrid';
import './style.css';

class Accounts extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        gotoLogin: PropTypes.func.isRequired,
        getAccountsApi: PropTypes.func.isRequired
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
        this.checkSession(this.props);

        this.props.getAccountsApi();
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.drawer} onDrawerToggle={this.handleDrawerToggle} />
                <Toolbar onDrawerToggle={this.handleDrawerToggle} />

                <div className="row center-xs" id="contentWrapper">
                    <div className="col-xs-11">
                        <DataGrid accounts={this.props.accounts} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    session: state.session,
    accounts: state.accounts
});

export default connect(mapStateToProps, {
    getAccountsApi,
    gotoLogin
})(Accounts);