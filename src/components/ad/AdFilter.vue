<!-- /**
 * @Author: xiaocao
 * @Date:   2023-02-02 22:55:35
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-03 17:18:24
 */
 -->

<template>
  <div class="column q-gutter-y-md" style="width: 100%">
    <div class="">起止时间：<AntTimeRangePicker /></div>
    <div class="">
      版本类型：<q-option-group
        v-model="formData.tags"
        :options="adConfig.tag_options"
        color="primary"
        type="checkbox"
        inline
        dense
        style="display: inline-block"
      />
    </div>

    <q-btn class="full-width" color="primary" label="搜索" />
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import 'ant-design-vue/es/time-picker/style/css';

import { TimeRangePicker as AntTimeRangePicker } from 'ant-design-vue';
import { reactive, onMounted } from 'vue';
import { useAdStore } from '@/stores/ad';

const adConfig = useAdStore();

onMounted(() => {
  adConfig.fetch_sources();
  adConfig.fetch_tags();
});

const formData = reactive({
  start: 0,
  end: 0,
  tags: [],
});
</script>
