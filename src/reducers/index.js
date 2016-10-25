import session from './session';
import accounts from './accounts';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = {
    accounts,
    session,
    routing
};

export default rootReducer;