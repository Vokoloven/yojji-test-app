import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/',
});
