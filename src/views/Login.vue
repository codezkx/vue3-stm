<template>
  <div class="hg100">
    <el-row class="hg100">
      <el-col
        class="login-left-block"
        :span="12">
        <LoginleftInformation />
      </el-col>
      <el-col
        class="login-right-block justify-center direction-center"
        :span="12">
        <Authorization
          title="Log in to"/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
	import { Authorization } from '@/components/login'
  import { LoginleftInformation } from '@/components/login'
</script>

<style lang="less" scoped>
@FFF: '#FFF';

.login-left-block{
  background-color: #282C34DE;
}

.login-right-block {
  background-color: #FFF;
}

.hg100 {
  height: 100%;
}

.az-login-left {
  color: #FFF;
}

</style>
