<template>
  <el-container>
    <el-aside :class="isCollapse && 'collapse'">
      <NavMenu :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="isCollapse" />
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from './components/NavMenu.vue'
import NavHeader from './components/NavHeader.vue'

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-aside {
  transition: 0.28s;
  width: 200px;
  background-color: #001529;
  &.collapse {
    width: 64px;
    transition: 0.28s;
  }
}
.el-header {
  padding: 0;
}
</style>
