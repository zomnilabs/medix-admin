export const getAuthToken = () => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return token ? JSON.parse(token) : null;
};

export const setAuthToken = (token, isRemeber) => {
    if(isRemeber){
        localStorage.setItem('token', token);
    }else{
        sessionStorage.setItem('token', token);
    }
};

export const deleteAuthToken = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
};