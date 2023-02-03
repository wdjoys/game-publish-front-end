/**
 * @Author: xiaocao
 * @Date:   2023-02-03 14:31:50
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-03 17:17:22
 */
import { defineStore } from 'pinia';
import { SessionStorage } from 'quasar';
import { Ad } from '@/api/ad';

interface Source {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

export const useAdStore = defineStore('ad', {
  state: () => ({
    sources: [] as Source[],
    tags: [] as Tag[],
  }),
  getters: {
    tag_options: (state) =>
      state.tags.map((tag) => ({ label: tag.name, value: tag.id })),
  },
  actions: {
    // 获取 sources 数据
    async fetch_sources() {
      if (this.sources.length == 0) {
        // source 为空就到 session 内取值
        const source = SessionStorage.getItem('source') as unknown as Source[];
        if (!Boolean(source)) {
          // session 内为空就到服务器取值
          this.sources = (await new Ad().getSource()) as unknown as Source[];
          SessionStorage.set('source', this.sources);
        } else {
          // session 内的 source 不为空就赋值给store的source
          this.sources = source;
        }
      }
    },

    // 获取 tags 数据
    async fetch_tags() {
      if (this.tags.length == 0) {
        // tags 为空就到 session 内取值
        const tags = SessionStorage.getItem('tags') as unknown as Tag[];
        if (!Boolean(tags)) {
          // tags 内为空就到服务器取值
          this.tags = (await new Ad().getTags()) as unknown as Tag[];
          SessionStorage.set('tags', this.tags);
        } else {
          // session 内的 tags 不为空就赋值给 store 的 tags
          this.tags = tags;
        }
      }
    },
  },
});
