import session from './session';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = {
    session,
    routing
};

export default rootReducer;