/**
 * @Author: xiaocao
 * @Date:   2022-10-26 10:58:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 14:34:44
 */

import { PATH } from '@/config/api.config';
import { UserInfo } from '@/type';
import { request } from 'boot/axios';

export class User {
  getMany(params: unknown) {
    return request({
      url: PATH.user,
      method: 'get',
      params,
    });
  }

  update(parameter: unknown) {
    return request({
      url: PATH.user,
      method: 'put',
      data: parameter,
    });
  }

  register(formData: UserInfo) {
    return request({
      url: PATH.register,
      method: 'POST',
      data: formData,
    });
  }

  login(formData: UserInfo) {
    const form = new FormData();
    form.append('username', formData.username);
    form.append('password', formData.password);

    return request({
      url: PATH.login,
      method: 'POST',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data;charset=utf-8',
      },
    });
  }

  changePassword(data: unknown) {
    return request({
      url: PATH.change_password,
      method: 'POST',
      data,
    });
  }
}
