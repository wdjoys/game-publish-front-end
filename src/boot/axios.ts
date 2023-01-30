/**
 * @Author: xiaocao
 * @Date:   2023-01-29 16:30:13
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 14:34:03
 */
import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { baseURL } from '@/config/api.config';
import { useUserStore } from 'stores/user';
import { Notify } from 'quasar';
import { UserInfo } from '@/type';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const request = axios.create({ baseURL, timeout: 5000 });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = request;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

const user = useUserStore();

const err = (error: {
  response: { status: number };
  message: string | string[];
}) => {
  // 有响应
  if (error.response) {
    if (error.response.status === 403) {
      Notify.create({
        type: 'warning',
        message: '账户没有此操作权限',
      });
    } else if (error.response.status === 401) {
      Notify.create({
        type: 'warning',
        message: '未登录',
      });

      const userInfo = user.getUserInfo();
      if (userInfo) {
        user.logout();
        window.location.reload();
      }
    } else if (error.response.status === 404) {
      Notify.create({
        type: 'warning',
        message: '资源不存在',
      });
    }

    // 超时
  } else if (
    error.message.indexOf('timeout') !== -1 ||
    error.message.indexOf('Network Error') !== -1
  ) {
    Notify.create({
      type: 'warning',
      message: '请检查本地网络，或联系管理员',
    });
  }
  // console.log(error.message)
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  // console.log(store.getters['User/get_token'], 'ccc')
  const userInfo = user.getUserInfo() as UserInfo;
  // console.log(token, 'ccc')
  if (userInfo) {
    config.headers.Authorization = 'Bearer ' + userInfo.token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }

  // console.log(config)
  return config;
}, err);

// response interceptor
request.interceptors.response.use((response) => {
  return response.data;
}, err);

export { request };
