import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { reducer as formReducer } from 'redux-form';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

const configureStore = preloadedState => createStore(
    combineReducers({
        ...rootReducer,
        ...preloadedState,
        form: formReducer,
        routing: routerReducer
    }),
    applyMiddleware(thunk, routerMiddleware(browserHistory))
);

export default configureStore;