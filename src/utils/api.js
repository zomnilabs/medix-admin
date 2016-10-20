import {
    getAuthToken
} from './token.js';

const API_URL = 'http://api.medix.dev/v1/';

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
    get: (url) => fetch(`${API_URL}${url}`, fetchOpts('GET')),
    post: (url, data) => fetch(`${API_URL}${url}`, fetchOpts('POST', data)),
    put: (url, data)  => fetch(`${API_URL}${url}`, fetchOpts('PUT', data)),
    delete: (url) => fetch(`${API_URL}${url}`, fetchOpts('DELETE'))
};

export default API;