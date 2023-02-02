<!-- /**
 * @Author: xiaocao
 * @Date:   2023-02-02 22:55:35
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 23:16:28
 */
 -->

<template>
  <div class="row justify-between" style="width: 100%">
    <q-input outlined v-model="form.start" label="Outlined" dense />
    <q-input outlined v-model="form.start" label="Outlined" dense />
    <q-input outlined v-model="form.start" label="Outlined" dense />
    <q-input outlined v-model="form.start" label="Outlined" dense />
    <q-input outlined v-model="form.start" label="Outlined" dense />
    <q-btn color="primary" label="Primary" dense />
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
