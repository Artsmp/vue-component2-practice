<template>
  <div class="icon-select-wrap">
    <ChooseIcon title="选择图标" v-model:visible="visible">选择图标</ChooseIcon>
    <ChooseArea @change="handleChange" :value="data" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ChooseIcon from '../components/choose-icon/ChooseIcon.vue'
import ChooseArea, { AreaData } from '../components/choose-area/ChooseArea.vue'
const data = [
  {
    code: '14',
    name: '山西省',
  },
  {
    code: '1405',
    name: '晋城市',
  },
  {
    code: '140525',
    name: '泽州县',
  },
]
const handleChange = (value: AreaData[]) => {
  console.log(value)
}
const visible = ref(false)
</script>
<style lang="scss" scoped></style>
