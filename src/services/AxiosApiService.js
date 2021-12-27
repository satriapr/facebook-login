import axios from 'axios';

import Constant from '../constants/Constant';

// Axios request helper
const instance = axios.create({
  withCredentials: true,
  baseURL: Constant.API_BASE_URL,
});

export default instance;
