import axios from 'axios';
import auth from './auth';
import quetions from './quetions'

const instance = axios.create({
  // @ts-ignore
  baseURL: window.REACT_APP_SERVER_API !== 'REPLACE_REACT_APP_SERVER_API' ? window.REACT_APP_SERVER_API : process.env.REACT_APP_SERVER_API || 'https://63d304794abff88834170d21.mockapi.io/',
})


// instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const kc_access = getCookie('kc-access') || 'test_token';
//   if (kc_access) config.headers!['kc-access'] = kc_access;
//   return config
// });

const { login, register } = auth
const { getQuetionById, getQuetions } = quetions


const api = {
  login,
  register,
  ...quetions
}

export { instance, api };

