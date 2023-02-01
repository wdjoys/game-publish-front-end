<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-01 23:26:32
 */
 -->

<template>
  <AdTable class="ad-list" :AdList="AdList" />
</template>

<script setup lang="ts">
import AdTable from 'components/ad/AdTable.vue';
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

<style lang="scss" scoped>
.ad-list {
  width: 950px;
  margin: 0 auto;
  background-color: $table-background;
}
</style>
