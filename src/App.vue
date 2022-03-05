<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
svg {
  width: 1em;
  height: 1em;
  vertical-align: middle !important;
}
html,
body,
#app,
.el-aside,
.el-container,
.el-menu {
  height: 100%;
}

// 定制滚动条样式
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
