<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-04 15:41:36
 */
 -->

<template>
  <q-virtual-scroll
    style="width: 100%"
    type="table"
    :virtual-scroll-item-size="30"
    :items="AdList"
    scroll-target="body"
    :virtual-scroll-sticky-size-start="30"
    :virtual-scroll-sticky-size-end="32"
  >
    <template #before>
      <tbody v-if="AdList.length == 0">
        <tr v-for="n in 25" :key="n">
          <td v-for="k in 6" :key="k">
            <q-skeleton
              animation="pulse-x"
              type="text"
              width="90px"
              class="horiz-center"
            />
          </td>
        </tr>
      </tbody>
    </template>

    <template v-slot="{ item: row, index }">
      <tr :key="index" @click="openAd(row[0][6])">
        <td>{{ row[0][0] }}</td>
        <td>{{ row[0][1] }}</td>
        <td>{{ date.formatDate(row[0][2], 'MM月DD日 HH点mm分') }}</td>
        <td>{{ row[0][3] }}</td>
        <td>{{ row[0][4] }}</td>
        <td>{{ row[0][5] }}</td>
      </tr>
    </template>
  </q-virtual-scroll>
</template>

<script setup lang="ts">
import { date } from 'quasar';
import { Ad as AdType } from '@/type';

defineProps<{
  AdList: AdType[];
}>();

const openAd = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
.q-table tbody tr {
  background-color: rgb(238, 223, 223);
  text-align: center;
}
.q-table tbody tr td {
  height: 30px;
  text-align: center;
}
</style>
