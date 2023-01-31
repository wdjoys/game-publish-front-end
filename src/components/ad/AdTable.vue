<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-31 23:36:17
 */
 -->

<template>
  <q-virtual-scroll
    class="table"
    type="table"
    style="max-height: 80vh"
    :virtual-scroll-item-size="30"
    :items="AdList"
    v-slot="{ item: row, index }"
  >
    <tr :key="index" @click="openAd(row[7])">
      <td>{{ row[1] }}</td>
      <td>{{ row[2] }}</td>
      <td>{{ row[3] }}</td>
      <td>{{ row[4] }}</td>
      <td>{{ row[5] }}</td>
      <td>{{ row[6] }}</td>
    </tr>
  </q-virtual-scroll>
</template>

<script setup lang="ts">
defineProps<{
  AdList: [];
}>();

const openAd = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style lang="scss" scoped>
.table {
  background-color: $table-background;
}

.q-table tbody td {
  height: 30px;
  // width: 50%;
}

.q-table {
  width: 70%;
}
</style>
