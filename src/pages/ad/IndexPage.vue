<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-04 15:45:25
 */
 -->

<template>
  <div
    class="row justify-center horiz-center"
    style="height: 100%; width: 1100px"
  >
    <AdFilter style="margin: 20px 0" @filter="filter" />
    <AdTable :AdList="AdList" />
  </div>
</template>

<script setup lang="ts">
import AdTable from 'components/ad/AdTable.vue';
import AdFilter from 'components/ad/AdFilter.vue';
import { Ad } from '@/api/ad';

import { onBeforeMount, reactive, toRaw } from 'vue';
import { useAdStore } from '@/stores/ad';
import { Ad as AdType } from '@/type';

let AdList: AdType[] = reactive([]);
let AdListOriginal: AdType[];

const getAdList = async () => {
  AdListOriginal = (await new Ad().getMany()) as unknown as AdType[];

  Array.prototype.push.apply(AdList, AdListOriginal);
};

const adConfig = useAdStore();

onBeforeMount(() => {
  getAdList();

  adConfig.fetch_sources();
  adConfig.fetch_tags();
});

// 判断两个数据是否有交集
function isIntersection<T>(a: T[], b: T[]) {
  const intersection = a.filter((v) => b.includes(v));
  return intersection.length > 0;
}

const filter = (filterConfig: any) => {
  const result = AdListOriginal.filter((item) =>
    isIntersection(item[2], filterConfig.tags)
  );

  Object.assign(AdList, result);
};
</script>

<style lang="scss" scoped></style>
