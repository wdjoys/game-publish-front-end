/**
 * @Author: xiaocao
 * @Date:   2022-10-26 09:46:30
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 17:57:28
 */
// 后端API应用地址
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? '//api-1.xn--dpq60w4ytokv.com/'
    : '//8088.gr931814.10vq2pby.paas.mkyun.cn/';

// api路径
export const PATH = {
  // 用户管理
  user: '/user/',
  login: '/user/login',
  change_password: '/user/change_password',
  register: '/user/register',

  //APP接口地址
  //APP  - 选型应用接口url ——————————————————————————————————————————————————————————————————————————————————
  data: '/data/', //选型

  //APP  - 选型应用接口url ——————————————————————————————————————————————————————————————————————————————————
};
