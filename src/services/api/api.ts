import axios, { type InternalAxiosRequestConfig } from 'axios';
import { ENV } from '@/config/env';

const apiInstance = axios.create({
    baseURL: ENV.BASE_URL,
});

apiInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    const isExternal = config.url?.startsWith('http');

    if (token && !isExternal) {
        config.headers.Authorization = `Bearer ${token}`;

        if (config.method === 'get') {
            config.params = { ...config.params, token };
        }
    }
    return config;
});

const getPayloadWithToken = (data: Record<string, unknown>) => {
    const token = localStorage.getItem('token');
    return { token, ...data };
};

export default {
    get: async <T>(route: string, params?: Record<string, unknown>): Promise<T> => {
        const response = await apiInstance.get<T>(route, { params });
        return response.data;
    },

    post: async <T>(route: string, data: Record<string, unknown>): Promise<T> => {
        const response = await apiInstance.post<T>(route, getPayloadWithToken(data));
        return response.data;
    },

    put: async <T>(route: string, data: Record<string, unknown>): Promise<T> => {
        const response = await apiInstance.put<T>(route, getPayloadWithToken(data));
        return response.data;
    },

    delete: async <T>(route: string, data: Record<string, unknown>): Promise<T> => {
        const response = await apiInstance.delete<T>(route, {
            data: getPayloadWithToken(data)
        });
        return response.data;
    },

    upload: async <T>(route: string, formData: FormData): Promise<T> => {
        const response = await apiInstance.post<T>(route, formData);
        return response.data;
    }
};