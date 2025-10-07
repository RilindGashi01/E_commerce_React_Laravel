import axios from "axios";

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials:true
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('auth_token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
});

export const AuthAPI ={
    register:(userData)=> api.post('/api/register', userData),
    login: (Credential)=> api.post('/api/login', Credential),
    logout: () => api.post('/api/logout'),
    getUser: () => api.get('/api/user'),
};

export default api;