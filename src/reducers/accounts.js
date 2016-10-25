import { fromJS } from 'immutable';

import {
    ACCOUNTS_GET,
    ACCOUNTS_GET_SUCCESS,
    ACCOUNTS_GET_FAILED,
    ACCOUNT_POST,
    ACCOUNT_POST_SUCCESS,
    ACCOUNT_POST_FAILED
} from '../actions/accounts';

const initState = fromJS(
    {
        isFetching: false,
        isFailed: false,
        accounts: []
    }
);

const accounts = (state = initState, action) => {
    switch (action.type) {
        case ACCOUNTS_GET:
            return state.merge(
                {
                    isFetching: true
                }
            );

        case ACCOUNTS_GET_SUCCESS:
            return state.merge(
                {
                    isFetching: false,
                    isFailed: false,
                    accounts: action.accounts.data
                }
            );

        case ACCOUNTS_GET_FAILED:
            return state.merge(
                {
                    isFetching: false,
                    isFailed: true
                }
            );

        case ACCOUNT_POST:
            return state.merge(
                {
                    isFetching: true
                }
            );

        case ACCOUNT_POST_SUCCESS:
            state = state.set('accounts', state.get('accounts').push(fromJS(action.account.data)));

            return state.merge(
                {
                    isFetching: false
                }
            );

        case ACCOUNT_POST_FAILED:
            return state.merge(
                {
                    isFetching: false,
                    isFailed: true
                }
            );
        default:
            return state;
    }
};

export default accounts;