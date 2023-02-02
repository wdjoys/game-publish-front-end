<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 21:26:15
 */
 -->

<template>
  <q-virtual-scroll
    type="table"
    :virtual-scroll-item-size="30"
    :items="AdList"
    scroll-target="body"
    :virtual-scroll-sticky-size-start="30"
    :virtual-scroll-sticky-size-end="32"
    v-slot="{ item: row, index }"
  >
    <tr :key="index" @click="openAd(row[7])">
      <td>{{ row[1] }}</td>
      <td>{{ row[2] }}</td>
      <td>{{ date.formatDate(row[6], 'MM月DD日 HH点mm分') }}</td>
      <td>{{ row[3] }}</td>
      <td>{{ row[4] }}</td>
      <td>{{ row[5] }}</td>
    </tr>
  </q-virtual-scroll>
</template>

<script setup lang="ts">
import { date } from 'quasar';
defineProps<{
  AdList: [];
}>();

const openAd = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped></style>
