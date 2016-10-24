import API from '../utils/api';

export const SESSION_GET = 'SESSION_GET';
export const SESSION_GET_SUCCESS = 'SESSION_GET_SUCCESS';
export const SESSION_GET_FAILED = 'SESSION_GET_FAILED';

export const SESSION_POST = 'SESSION_POST';
export const SESSION_POST_SUCCESS = 'SESSION_POST_SUCCESS';
export const SESSION_POST_FAILED = 'SESSION_POST_FAILED';

export const SESSION_DELETE = 'SESSION_DELETE';

export const getSession = () => ({
    type: SESSION_GET
});

export const getSessionSuccess = (user) => ({
    type: SESSION_GET_SUCCESS,
    payload: user
});

export const getSessionFailed = () => ({
    type: SESSION_GET_FAILED
});

export const postSession = () => ({
    type: SESSION_POST
});

export const postSessionSuccess = (token) => ({
    type: SESSION_POST_SUCCESS,
    token
});

export const postSessionFailed = () => ({
    type: SESSION_POST_FAILED
});

export const deleteSession = () => ({
    type: SESSION_DELETE
});

export const getSessionApi = () => (dispatch) => {
    dispatch(getSession());

    API.get('admin/auth').then((res) => {
        if (res.status !== 200) {
            dispatch(getSessionFailed());
            return;
        }

        res.json().then((json) => {
            dispatch(getSessionSuccess(json));
        });
    });
};

export const postSessionApi = (credentials) => (dispatch) => {
    dispatch(postSession());

    credentials['grant_type']       = 'admin';
    credentials['client_id']        = 'dental';
    credentials['client_secret']    = 'medix-web-app-client';

    return API.post('admin/auth', credentials).then((res) => {

        if (res.status !== 200) {
            dispatch(postSessionFailed());
            return;
        }

        res.json().then((json) => {
            dispatch(postSessionSuccess(json.access_token));
            dispatch(getSessionApi());
        });
    });
};