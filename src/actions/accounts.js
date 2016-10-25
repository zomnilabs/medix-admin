import API from '../utils/api';

export const ACCOUNTS_GET = 'ACCOUNTS_GET';
export const ACCOUNTS_GET_SUCCESS = 'ACCOUNTS_GET_SUCCESS';
export const ACCOUNTS_GET_FAILED = 'ACCOUNTS_GET_FAILED';

export const ACCOUNT_POST = 'ACCOUNT_POST';
export const ACCOUNT_POST_SUCCESS = 'ACCOUNT_POST_SUCCESS';
export const ACCOUNT_POST_FAILED = 'ACCOUNT_POST_FAILED';


export const getAccounts = () => ({
    type: ACCOUNTS_GET
});

export const getAccountsSuccess = (accounts) => ({
    type: ACCOUNTS_GET_SUCCESS,
    accounts
});

export const getAccountsFailed = () => ({
    type: ACCOUNTS_GET_FAILED
});

export const postAccount = () => ({
    type: ACCOUNT_POST
});

export const postAccountSuccess = (account) => ({
    type: ACCOUNT_POST_SUCCESS,
    account
});

export const postAccountFailed = () => ({
    type: ACCOUNT_POST_FAILED
});

export const getAccountsApi = () => (dispatch) => {
    dispatch(getAccounts());

    API.get('admin/tenants').then((res) => {
        if (res.status !== 200) {
            dispatch(getAccountsFailed());
            return;
        }

        res.json().then((json) => {
            dispatch(getAccountsSuccess(json));
        });
    });
};

export const postAccountApi = (payload) => (dispatch) => {
    dispatch(postAccount());

    API.post('admin/tenants', payload).then((res) => {
        if (res.status !== 200) {
            dispatch(postAccountFailed());
            return;
        }

        res.json().then((json) => {
            dispatch(postAccountSuccess(json));
        });
    });
};