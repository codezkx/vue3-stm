<template>
  <form :class="formClasses">
    <slot />
  </form>
</template>

<script lang="ts" setup>
  import { computed, provide, reactive, toRefs, watch } from 'vue'
  import { formProps } from './src/form'
  import { formContextKey } from "@/tokens"

  const props = defineProps(formProps)

  // 子组件中注入参数
  provide(
    formContextKey,
    reactive({
      ...toRefs(props)
    })
  )
</script>
