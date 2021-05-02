import axios from 'axios';
//import envs from '../../config/env'
const {REACT_APP_DEV_BACKEND_URL} = process.env
const axiosInstance = axios.create({
    baseURL: REACT_APP_DEV_BACKEND_URL,
})


export default axiosInstance