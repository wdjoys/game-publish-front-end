<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 23:32:27
 */
 -->

<template>
  <div
    class="row justify-center horiz-center q-gutter-y-lg"
    style="height: 100%; width: 1100px"
  >
    <AdFilter />
    <AdTable :AdList="AdList" />
  </div>
</template>

<script setup lang="ts">
import AdTable from 'components/ad/AdTable.vue';
import AdFilter from 'components/ad/AdFilter.vue';
import { Ad } from '@/api/ad';

import { onBeforeMount, reactive } from 'vue';

let AdList: [] = reactive([]);

const getAdList = async () => {
  const result: [] = (await new Ad().getMany()) as unknown as [];
  Array.prototype.push.apply(AdList, result);
};

onBeforeMount(() => {
  getAdList();
});
</script>

<style lang="scss" scoped></style>
