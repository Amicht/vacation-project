
const END_POINT = {
    login: '/api/user/login',
    register: '/api/user/register',
    vacation: '/api/vacation'
};
const METHODS = {
    GET: 'GET',
    POST: 'POST'
};

export const setToken = (token:string) => window.sessionStorage.setItem("user-jwt", JSON.stringify(token));

const getToken = () => {
    const token =  window.sessionStorage.getItem("user-jwt") || "[]";
    return JSON.parse(token);
};

const fetchData = (end_point: string) => fetch(end_point, {
    method: METHODS.GET,
    headers: {"Content-type": "Application/json", authorization: "Bearer " + getToken()},
});
const postData = (end_point: string, data:object) => fetch(end_point, {
    method: METHODS.POST,
    headers: {"Content-type": "Application/json", authorization: "Bearer " + getToken()},
    body: JSON.stringify(data)
});

export const login  = (data:object) => postData(END_POINT.login, data).then(res => res.json()).then(setToken);
export const register  = (data:object) => postData(END_POINT.register, data).then(res => res.json()).then(setToken);
export const getVacations = () => fetchData(END_POINT.vacation).then(res => res.json());

