import axiosApi from './AxiosApiService';

const getAuthUser = async () => {
  const res = await axiosApi.get('/auth/login/success');
  return res;
};

export default {
  getAuthUser
};
