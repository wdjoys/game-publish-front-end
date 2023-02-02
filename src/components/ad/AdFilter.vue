<!-- /**
 * @Author: xiaocao
 * @Date:   2023-02-02 22:55:35
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 23:52:59
 */
 -->

<template>
  <div class="row" style="width: 100%">
    <div class="col-2" v-for="n in 5" :key="n">
      <q-btn class="full-width" color="primary" label="Button" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  start: 0,
  end: 0,
  tags: [],
});
</script>
