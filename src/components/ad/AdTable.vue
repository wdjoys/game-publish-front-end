<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-31 17:50:26
 */
 -->

<template>
  <q-virtual-scroll
    class="table"
    type="table"
    style="max-height: 100%"
    :virtual-scroll-item-size="48"
    :items="AdList"
    v-slot="{ item: row, index }"
  >
    <tr :key="index">
      <td>#{{ index }}</td>
      <td v-for="(col, ii) in row" :key="ii">
        {{ col }}
      </td>
    </tr>
  </q-virtual-scroll>
</template>

<script setup lang="ts">
defineProps<{
  AdList: [];
}>();
</script>

<style lang="scss" scoped>
.table {
  background-color: $table-background;
}
</style>
