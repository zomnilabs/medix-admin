import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { reducer as formReducer } from 'redux-form';
import { routerMiddleware } from 'react-router-redux';

const configureStore = preloadedState => createStore(
    combineReducers({
        ...rootReducer,
        ...preloadedState,
        form: formReducer,
        routing: routerMiddleware
    }),
    applyMiddleware(thunk)
);

export default configureStore;