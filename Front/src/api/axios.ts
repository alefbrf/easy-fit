import axios from 'axios';

let api =  axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        "Content-type": "application/json"
    }
});

api.interceptors.response.use((response) => response, (error) => {
    console.clear();
    const ERROR_RESPONSE = {
        status: error.response.status,
        message: error.response.data
    }
    return Promise.reject(ERROR_RESPONSE);
});

export default api;