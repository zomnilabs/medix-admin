import { Map } from 'immutable';
import { setAuthToken, deleteAuthToken } from '../utils/token';

import {
    SESSION_GET,
    SESSION_GET_SUCCESS,
    SESSION_GET_FAILED,
    SESSION_POST,
    SESSION_POST_SUCCESS,
    SESSION_POST_FAILED,
    SESSION_DELETE
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
                    user: action.payload.data
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

        case SESSION_POST:
            return state.merge(
                {
                    isFetching: true
                }
            );

        case SESSION_POST_SUCCESS:
            console.log(action.token);
            setAuthToken(action.token, 1);

            return state.merge(
                {
                    isFetching: false,
                    isFailed: false
                }
            );

        case SESSION_POST_FAILED:
            return state.merge(
                {
                    isFetching: false,
                    isFailed: true
                }
            );

        case SESSION_DELETE:
            deleteAuthToken();

            return state.merge(
                {
                    isFetching: false,
                    isFailed: false,
                    user: null,
                    isAuth: false
                }
            );

        default:
            return state;
    }
};

export default session;