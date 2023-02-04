<!-- /**
 * @Author: xiaocao
 * @Date:   2023-02-02 22:55:35
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-04 15:02:01
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

    <q-btn class="full-width" color="primary" label="搜索" @click="search" />
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import 'ant-design-vue/es/time-picker/style/css';

import { TimeRangePicker as AntTimeRangePicker } from 'ant-design-vue';
import { reactive } from 'vue';
import { useAdStore } from '@/stores/ad';

const adConfig = useAdStore();

const formData = reactive({
  start: 0,
  end: 0,
  tags: [],
});

const emit = defineEmits(['filter', '']);
// 把赛选的配置信息传给父组件
const search = () => {
  emit('filter', formData);
};
</script>
