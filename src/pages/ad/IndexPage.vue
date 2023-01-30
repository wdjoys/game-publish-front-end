<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-30 15:00:18
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-01-30 16:20:34
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
        <div class="user">{{ item.id }} {{ item.title }}</div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
const items = reactive([]);
const getData = () => {
  for (let i = 0; i < 200000; i++) {
    items.push({ title: 'ssadqwesadwqe', id: i });
  }
};

onMounted(() => {
  getData();
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
