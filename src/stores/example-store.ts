/**
 * @Author: xiaocao
 * @Date:   2023-01-29 16:30:13
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-03 14:59:04
 */
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('source', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
