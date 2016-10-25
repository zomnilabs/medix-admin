import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { gotoLogin } from '../../actions/redirect';
import { getAccountsApi, postAccountApi } from '../../actions/accounts';
import Toolbar from '../../components/Toolbar';
import Drawer from '../../components/Drawer';
import DataGrid from '../../components/DataGrid';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Dialog from 'material-ui/Dialog';

import CreateTenantForm from '../../components/CreateTenantForm';

import './style.css';

const style = {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
};

class Accounts extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
        gotoLogin: PropTypes.func.isRequired,
        getAccountsApi: PropTypes.func.isRequired,
        postAccountApi: PropTypes.func.isRequired
    };

    state = {
        drawer: false,
        dialog: false
    };

    checkSession = (props) => {
        if (! props.session.get('isAuth')) {
            this.props.gotoLogin();
        }
    };

    handleDrawerToggle = () => this.setState({drawer: !this.state.drawer});

    handleOpenDialog = () => this.setState({dialog: true});

    handleCloseDialog = () => this.setState({dialog: false});

    handleCreateTenant = values => {
        this.props.postAccountApi(values);
    };

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

                <Dialog
                    title="Create New Account"
                    modal={false}
                    open={this.state.dialog}
                    onRequestClose={this.handleCloseDialog}
                    autoDetectWindowHeight={false}
                >
                    <CreateTenantForm onSubmit={this.handleCreateTenant} />
                </Dialog>

                <FloatingActionButton style={style} onTouchTap={this.handleOpenDialog}>
                    <ContentAdd />
                </FloatingActionButton>
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
    postAccountApi,
    gotoLogin,
})(Accounts);