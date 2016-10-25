import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class DrawerUI extends Component {

    handleToggle = (e) => {
        this.props.onDrawerToggle();
    };

    render() {
        return (
            <Drawer open={this.props.open}>
                <AppBar title="MEDIX"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonTouchTap={this.handleToggle}
                />

                <MenuItem onTouchTap={() => this.context.router.push('/dashboard')}>
                    Dashboard
                </MenuItem>
                <MenuItem onTouchTap={() => this.context.router.push('/accounts')}>
                    Accounts
                </MenuItem>
                <MenuItem onTouchTap={() => this.context.router.push('/users')}>
                    Users
                </MenuItem>
            </Drawer>
        );
    }
}

DrawerUI.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default DrawerUI;