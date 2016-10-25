import API from '../utils/api';

export const ACCOUNTS_GET = 'ACCOUNTS_GET';
export const ACCOUNTS_GET_SUCCESS = 'ACCOUNTS_GET_SUCCESS';
export const ACCOUNTS_GET_FAILED = 'ACCOUNTS_GET_FAILED';

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