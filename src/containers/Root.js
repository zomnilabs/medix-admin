import React, { PropTypes, Component } from 'react';
import { persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = { rehydrated: false }
    }

    componentWillMount() {
        const { store } = this.props;

        persistStore(store, { transforms: [immutableTransform()] }, () => {
            this.setState({ rehydrated: true })
        });
    }

    render() {
        const { store, history } = this.props;

        if (!this.state.rehydrated) {
            return <div>Loading...</div>
        }

        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}

export default Root;