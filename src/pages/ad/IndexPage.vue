<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-31 16:52:16
 */
 -->

<template>
  <AdTable :AdList="AdList" />
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

<style lang="scss" scoped></style>
