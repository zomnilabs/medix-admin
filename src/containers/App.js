import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends Component {
    static propTypes = {
        // Injected by React Router
        children: PropTypes.node
    };

    render() {
        const { children } = this.props;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                {children}
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage
});

export default connect(mapStateToProps, {})(App)