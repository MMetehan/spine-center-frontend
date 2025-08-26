import api from './apiClient';

export const login = async (credentials) => {
    const response = await api.post('/admin/login', credentials);
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/admin/logout');
    return response.data;
};

export const checkAuthStatus = async () => {
    //TODO check admin status
    // const response = await api.get('/admin/status');
    // return response.data;
};
