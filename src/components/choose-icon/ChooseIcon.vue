<template>
  <el-button type="primary" @click="emit('update:visible', true)">
    <slot></slot>
  </el-button>
  <el-dialog v-model="visible" :title="title" width="40%">
    <el-row class="icon-wrapper">
      <el-col
        class="icon-item"
        @click="handleOk(`icon${toLine(item)}`)"
        :span="6"
        v-for="item in Object.keys(Icons)"
        :key="item"
        :title="item"
      >
        <component :is="`icon${toLine(item)}`"></component>
        <div class="item-text">{{ item }}</div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script lang="ts" setup>
import { watch } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '../../util'
import { useCopy } from '../../hooks/useCopy'
import { ElMessage } from 'element-plus'

const props = defineProps<{
  title: string // 弹出框标题
  visible: boolean // 弹出框可见
}>()
watch(
  () => props.visible,
  (val) => {
    emit('update:visible', val)
  }
)
const emit = defineEmits(['update:visible'])
const handleOk = (text: string) => {
  useCopy(text)
  ElMessage({
    type: 'success',
    message: '复制成功！'
  })
  emit('update:visible', false)
}
</script>
<style lang="scss" scoped>
.icon-wrapper {
  height: 400px;
  overflow: auto;
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    cursor: pointer;
    .item-text {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      text-align: center;
    }
    .icon {
      width: 2em;
      height: 2em;
      margin-bottom: 10px;
    }
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
