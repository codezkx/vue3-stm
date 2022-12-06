<template>
  <div :class="ns.b()">

  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { dividerProps } from './divider'
  import { useNamespace } from '@/hooks/use-namespace'
  import type { CSSProperties } from 'vue'

  defineOptions({
    name: 'Divider'
  })

  const props = defineProps(dividerProps)

  const ns = useNamespace('divider')

  // const dividerStyle = computed(() => {
  //   returen
  // }) as CSSProperties


</script>

<style lang="scss">
</style>
