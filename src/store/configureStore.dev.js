import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { reducer as formReducer } from 'redux-form';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { autoRehydrate } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
    const store = createStore(
        combineReducers({
            ...rootReducer,
            ...preloadedState,
            form: formReducer,
            routing: routerReducer
        }),
        composeEnhancers(
            applyMiddleware(thunk, createLogger(), routerMiddleware(browserHistory))
        ),
        autoRehydrate()
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
};

export default configureStore;