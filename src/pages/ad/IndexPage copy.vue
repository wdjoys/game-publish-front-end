<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-01 16:21:59
 */
 -->

<template>
  11
  <div style="width: 1000px; margin: 0 auto"><AdTable /></div>
</template>

<script setup lang="ts">
import AdTable from 'components/ad/AdTable-1.vue';
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
