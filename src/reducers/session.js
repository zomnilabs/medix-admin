import { Map } from 'immutable';
import {
    SESSION_GET,
    SESSION_GET_SUCCESS,
    SESSION_GET_FAILED
} from '../actions/session';

const initState = Map(
    {
        isAuth: false,
        isFetching: false,
        isFailed: false,
        user: null
    }
);

const session = (state = initState, action) => {
    switch (action.type) {
        case SESSION_GET:
            return state.merge(
                {
                    isFetching: true
                }
            );
        case SESSION_GET_SUCCESS:
            return state.merge(
                {
                    isAuth: true,
                    isFetching: false,
                    isFailed: false,
                    user: action.payload
                }
            );
        case SESSION_GET_FAILED:
            return state.merge(
                {
                    isAuth: false,
                    isFetching: false,
                    user: null
                }
            );
        default:
            return state;
    }
};

export default session;