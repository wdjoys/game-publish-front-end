/**
 * @Author: xiaocao
 * @Date:   2022-10-26 10:58:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-31 11:51:45
 */

import { PATH } from '@/config/api.config';
import { request } from 'boot/axios';

export class Ad {
  getMany(params?: unknown) {
    return request({
      url: PATH.data,
      method: 'get',
      params,
    });
  }
}
