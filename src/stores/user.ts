/**
 * @Author: xiaocao
 * @Date:   2023-01-30 11:01:45
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 14:33:39
 */

import { defineStore } from 'pinia';
import { User } from '@/api/user';
import { UserInfo } from '@/type';
import { LocalStorage, SessionStorage } from 'quasar';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  getters: {},

  actions: {
    async login(formData: UserInfo) {
      const authInfo = (await new User().login(
        formData
      )) as unknown as UserInfo;

      this.setUserInfo(authInfo);
    },

    logout() {
      this.userInfo = {
        username: '',
        token: '',
      };
      SessionStorage.remove('userInfo');
      LocalStorage.remove('userInfo');
    },

    getUserInfo() {
      if (Object.keys(this.userInfo).length === 0) {
        if (SessionStorage.getItem('userInfo')) {
          this.userInfo = SessionStorage.getItem('userInfo') as UserInfo;
        } else {
          this.userInfo = LocalStorage.getItem('userInfo') as UserInfo;
        }
      }
      return this.userInfo;
    },

    setUserInfo(authInfo: UserInfo, keepAlive = false) {
      this.userInfo = authInfo;
      SessionStorage.set('userInfo', authInfo);
      keepAlive && LocalStorage.set('userInfo', authInfo);
    },
  },
});
