import API from '../utils/api';

export const SESSION_GET = 'SESSION_GET';
export const SESSION_GET_SUCCESS = 'SESSION_GET_SUCCESS';
export const SESSION_GET_FAILED = 'SESSION_GET_FAILED';

export const SESSION_POST = 'SESSION_POST';
export const SESSION_POST_SUCCESS = 'SESSION_POST_SUCCESS';
export const SESSION_POST_FAILED = 'SESSION_POST_FAILED';

export const SESSION_DELETE = 'SESSION_DELETE';
export const SESSION_DELETE_SUCCESS = 'SESSION_DELETE_SUCCESS';
export const SESSION_DELETE_FAILED = 'SESSION_DELETE_FAILED';

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

export const postSessionSuccess = () => ({
    type: SESSION_POST_SUCCESS
});

export const postSessionFailed = () => ({
    type: SESSION_POST_FAILED
});

export const deleteSession = () => ({
    type: SESSION_DELETE
});

export const deleteSessionSuccess = () => ({
    type: SESSION_DELETE_SUCCESS
});

export const deleteSessionFailed = () => ({
    type: SESSION_DELETE_FAILED
});

export const getSessionApi = () => (dispatch) => {
    dispatch(getSession());

    API.get('admin/auth').then((res) => {
        if (res.status === 200) {
            dispatch(getSessionSuccess(res.data.data));
        }

        dispatch(getSessionFailed());
    });
};