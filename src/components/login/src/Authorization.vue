<template>
  <div>
    <h3>{{ title }}</h3>
    <!-- form -->
  </div>
  <!-- 第三方账号登录 -->
  <div>

  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="less" scoped>

</style>
