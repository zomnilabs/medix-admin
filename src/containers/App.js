import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import Explore from '../components/Explore';
// import { resetErrorMessage } from '../actions';

class App extends Component {
    static propTypes = {
        // Injected by React Router
        children: PropTypes.node
    };

    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage
});

export default connect(mapStateToProps, {})(App)