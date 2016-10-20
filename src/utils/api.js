import {
    getAuthToken
} from './token.js';

const fetchOpts = (method, body = null) => {
    return Object.assign({}, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
        }
    }, body ? {
        body: JSON.stringify(body)
    } : {});
};

const API = {
    get: (url) => fetch(url, fetchOpts('GET')),
    post: (url, data) => fetch(url, fetchOpts('POST', data)),
    put: (url, data)  => fetch(url, fetchOpts('PUT', data)),
    delete: (url) => fetch(url, fetchOpts('DELETE'))
};

export default API;