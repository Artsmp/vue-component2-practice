<template>
  <el-menu
    :collapse="collapse"
    :collapse-transition="false"
    background-color="#001529"
    text-color="#ccc"
    active-text-color="#41b883"
    class="menu-wrapper"
  >
    <el-menu-item>
      <icon-edit />
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item>
      <icon-edit />
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item>
      <icon-edit />
      <template #title>省市区选择</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
defineProps<{ collapse: boolean }>()
</script>

<style lang="scss" scoped>
.menu-wrapper {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .icon {
    margin-right: 15px;
  }
}
</style>
