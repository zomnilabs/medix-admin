import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class ToolbarUI extends React.Component {

    constructor(props) {
        super(props);
    }

    handleToggle = (e) => {
        this.props.onDrawerToggle();
    };

    render() {
        return (
            <AppBar
                title={<span style={styles.title}>MEDIX</span>}
                onLeftIconButtonTouchTap={this.handleToggle}
            />
        );
    }
}

export default ToolbarUI;