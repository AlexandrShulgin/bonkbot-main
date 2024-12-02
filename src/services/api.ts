import axios, { InternalAxiosRequestConfig } from 'axios';
// import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_BASEURL;

const API = axios.create({
  baseURL: 'https://chat.bonkbot.cloud',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.response.use(
  (res: any) => {
    return res;
  },
  async (err: {
    config: any;
    response: { status: number; data: { message: any } };
  }) => {
    const originalConfig = err.config;
    if (originalConfig.url !== '/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 500) {
        console.log('err.response.status === 500');
        // toast.error('Something went wrong', {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      } else if (err.response.status === 401) {
        console.log('err.response.status === 401');
        window.location.href = '/';
      } else if (err.response.status >= 400) {
        console.log('err.response.status >= 400');
        // toast.error(err.response.data.message, {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      } else if (err.response.status === 403) {
        console.log('err.response.status === 403');
        window.location.href = '/';
      }
    }
    return Promise.reject(err);
  }
);

API.interceptors.request.use(
  (config:InternalAxiosRequestConfig<any>) => {
    // console.log(baseUrl, url)
    const token = "00ae0dfe-7f47-4f0b-a6a1-0ceaff4bc0b2";
    if (config.url !== '/login' && !!config?.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('error');
    return Promise.reject(error);
  }
);

export { baseURL };

export default API;
