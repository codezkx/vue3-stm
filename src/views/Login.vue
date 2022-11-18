<template>
  <el-row class="hg100">
		<el-col
			class="left-bg el-login-left"
			:span="12">
			<LoginleftInformation />
		</el-col>
		<el-col
			class="right-bg el-login-right flex justify-center"
			:span="12">
			<Authorization
				title="Log in to"/>
		</el-col>
  </el-row>

</template>

<script lang="ts" setup>
	import { Authorization } from '@/components/login'
  import { LoginleftInformation } from '@/components/login'
</script>

<style lang="less" scoped>
@FFF: '#FFF';

.left-bg{
  background-color: #282C34DE;
}

.right-bg {
  background-color: #FFF;
}

.hg100 {
  height: 100vw;
}

.az-login-left {
  color: #FFF;
}

</style>
