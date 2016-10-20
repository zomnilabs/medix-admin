import session from './session';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    session,
    routing
});

export default rootReducer;