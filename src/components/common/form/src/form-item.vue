<template>
  <div
    ref="formItemRef">
    <!-- label -->
    <!-- 内容 -->
    <div>
      <slot/>
      <!-- 报错信息 -->
      <transition>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  } from 'vue'
import { formItemProps } from './form-item'

defineOptions({
  name: 'ElFormItem',
})

const props = defineProps(formItemProps)


</script>

<style scope>

</style>
