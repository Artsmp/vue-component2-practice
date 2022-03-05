<template>
  <div class="choose-area-wrap">
    <el-select
      v-model="selectedProvince"
      placeholder="请选择省份"
      clearable
      @clear="clearProvince"
    >
      <el-option
        v-for="province in provinceData"
        :key="province.code"
        :label="province.name"
        :value="province.code"
      >
      </el-option>
    </el-select>
    <el-select
      :disabled="cityDisabled"
      v-model="selectedCity"
      placeholder="请选择城市"
      clearable
      @clear="clearCity"
    >
      <el-option
        v-for="city in cityData"
        :key="city.code"
        :label="city.name"
        :value="city.code"
      >
      </el-option>
    </el-select>
    <el-select
      :disabled="areaDisabled"
      v-model="selectedArea"
      placeholder="请选择区域"
      clearable
    >
      <el-option
        v-for="area in areaData"
        :key="area.code"
        :label="area.name"
        :value="area.code"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import area from './lib/pca-code.json'

export interface AreaData {
  name: string
  code: string
  children?: AreaData[]
}

const props = defineProps<{
  value?: AreaData[]
}>()

const emit = defineEmits(['change'])

const provinceData = ref<AreaData[]>(area)
const cityData = ref<AreaData[]>([])
const areaData = ref<AreaData[]>([])
const selectedProvince = ref('') // 选中的省份代码
const selectedCity = ref('') // 选中的城市代码
const selectedArea = ref('') // 选中的区域代码
if (props.value) {
  selectedProvince.value = props.value[0].code
  selectedCity.value = props.value[1].code
  selectedArea.value = props.value[2].code
  cityData.value = provinceData.value.find(
    (p) => p.code === selectedProvince.value
  )!.children!
  areaData.value = cityData.value.find(
    (c) => c.code === selectedCity.value
  )!.children!
}
const cityDisabled = computed(() => {
  return selectedProvince.value ? false : true
})
const areaDisabled = computed(() => {
  return selectedCity.value ? false : true
})
watch(selectedProvince, () => {
  selectedCity.value = ''
  selectedArea.value = ''
  if (!selectedProvince.value) return
  cityData.value = provinceData.value.find(
    (province) => province.code === selectedProvince.value
  )!.children!
})
watch(selectedCity, () => {
  selectedArea.value = ''
  if (!selectedCity.value) return
  // 如果选中城市，让区域选中的值为空，重新计算区域列表
  areaData.value = cityData.value.find(
    (city) => city.code === selectedCity.value
  )!.children!
})
watch(selectedArea, () => {
  if (!selectedArea.value) return
  const province = {
    code: selectedProvince.value,
    name: provinceData.value.find((p) => p.code === selectedProvince.value)!
      .name,
  }
  const city = {
    code: selectedCity.value,
    name: cityData.value.find((c) => c.code === selectedCity.value)!.name,
  }
  const area = {
    code: selectedArea.value,
    name: areaData.value.find((a) => a.code === selectedArea.value)!.name,
  }
  emit('change', [province, city, area])
})

const clearProvince = () => {}
const clearCity = () => {
  selectedArea.value = ''
}
</script>
<style lang="scss" scoped>
.choose-area-wrap {
  display: flex;
  gap: 10px;
}
</style>
