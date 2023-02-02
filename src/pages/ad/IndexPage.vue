<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 22:04:04
 */
 -->

<template>
  <div class="row justify-center items-center" style="height: 100%">
    <q-markup-table style="width: 1200px" v-if="AdList.length == 0">
      <tbody>
        <tr v-for="n in 25" :key="n">
          <td v-for="k in 6" :key="k">
            <q-skeleton animation="pulse-x" type="text" width="85px" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <AdTable style="width: 1200px" :AdList="AdList" />
  </div>
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
.q-table tbody tr td {
  height: 30px;
}

.q-table tbody tr {
  background-color: rgb(238, 223, 223);
  text-align: center;
}
</style>
