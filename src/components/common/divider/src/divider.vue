<template>
  <div
    :class="[ns.b(), ns.m(direction)]"
    :style="dividerStyle"
    role="separator">
    <div
      v-if="solts.default && direction !== 'vertical'"
      :class="[ns.e('text'), ns.is(contentPosition)]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, useSlots } from 'vue'
  import { dividerProps } from './divider'
  import { useNamespace } from '@/hooks/use-namespace'
  import type { CSSProperties } from 'vue'

  defineOptions({
    name: 'ElDivider'
  })

  const props = defineProps(dividerProps)

  const ns = useNamespace('divider')

  const solts = useSlots()

  const dividerStyle = computed(() => {
    return ns.cssVar({
      'border-style': props.borderStyle,
    }) as CSSProperties
  })


</script>

<style lang="scss">
</style>
