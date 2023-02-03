/**
 * @Author: xiaocao
 * @Date:   2022-10-26 10:58:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-03 14:51:16
 */

import { PATH } from '@/config/api.config';
import { request } from 'boot/axios';

export class Ad {
  getMany(params?: unknown) {
    return request({
      url: PATH.ad,
      method: 'get',
      params,
    });
  }

  getTags(params?: unknown) {
    return request({
      url: PATH.tag,
      method: 'get',
      params,
    });
  }

  getSource(params?: unknown) {
    return request({
      url: PATH.source,
      method: 'get',
      params,
    });
  }
}
