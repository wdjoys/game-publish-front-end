<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 17:41:52
 */
 -->

<template>
  <div class="home">
    <RecycleScroller
      class="scroller"
      :items="items"
      :item-size="50"
      v-if="items.length"
    >
      <template v-slot="{ item }">
        <div class="user">{{ item }}</div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { Ad } from '@/api/ad';

const items = reactive([]);

onMounted(async () => {
  const d = await new Ad().getMany();
  const dd = d.map((ad, index) => {
    return {
      id: index,
      ad,
    };
  });

  items.push(...dd);
});
</script>

<style lang="scss" scoped>
.scroller {
  height: 800px;
  background-color: rgba(0, 0, 0, 0.1);
}

.user {
  height: 50px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
