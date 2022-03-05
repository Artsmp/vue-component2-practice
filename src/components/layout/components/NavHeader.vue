<template>
  <div class="header-wrapper">
    <span @click="toggleMenu" style="cursor: pointer;font-size: 20px;">
      <icon-expand v-show="collapse" />
      <icon-fold v-show="!collapse" />
    </span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ collapse: boolean }>()
const emit = defineEmits(['update:collapse'])
const toggleMenu = () => {
  emit('update:collapse', !props.collapse)
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
}
</style>
