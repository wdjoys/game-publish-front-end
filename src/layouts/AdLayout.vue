<!-- /**
 * @Author: xiaocao
 * @Date:   2023-01-29 16:30:13
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 17:37:20
 */
 -->
<template>
  <q-layout view="hhh  Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <div class="header"></div>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style lang="scss" scoped>
$header-height: 200px;

.header {
  background-color: rgb(78, 43, 43);
  height: $header-height;
}

.page-container {
  height: calc(100% - #{$header-height});
}
</style>
