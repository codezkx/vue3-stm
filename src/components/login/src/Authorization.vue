<template>
  <div class="vou-login-heder">
    <div class="vou-pointer vou-user-none pdB12 flex-center">
      <span
        :class="{active: isActive === 'pass' }"
        @click="onTab('pass')">密码登录</span>
      <span class="pdR20 pdL20 vou-heder-tab--line"></span>
      <span
        :class="{active: isActive === 'note' }"
        @click="onTab('note')">短信登录</span>
    </div>
    <!-- form -->
    <el-form
      ref="accountRef"
      :model="accountForm"
      :rules="rules"
      class="demo-ruleForm"
    >
      <el-form-item
        label=""
        prop="userName">
        <el-input v-model="accountForm.userName">
          <template #prepend>账户</template>
        </el-input>
      </el-form-item>
      <el-form-item
        label=""
        prop="password">
        <el-input
          v-model="accountForm.password"
          type="password"
          autocomplete="off" >
          <template #prepend>密码</template>
        </el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-checkbox v-model="rememberm">记住密码</el-checkbox>
    </div>
    <div class="flex-center">
      <el-button
          type="primary"
          @click="submitForm(accountRef)"
          >
          登录
        </el-button>
      <el-button
        @click="resetForm(accountRef)">注册</el-button>
    </div>
    </div>
    <!-- 第三方账号登录 -->
    <div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, computed } from 'vue';
  import type { FormInstance } from 'element-plus';

  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  });

  const isActive = ref<String>('');

  const onTab = (tabType: string) => {
    isActive.value = tabType;
  };
  const accountRef = ref<FormInstance>();
  console.log(accountRef, 'accountRef');

  const accountForm = reactive({
    userName: '',
    password: '',
  });

  const validateUserName = (rule: any, value: string, cb: Function) => {

  };

  const validatepassword = (rule: any, value: string, cb: Function) => {

  };

  const rules = reactive({
    userName: [{ validator: validateUserName, trigger: 'blur' }],
    password: [{ validator: validatepassword, trigger: 'blur' }],
  });

  const submitForm = (fromRef: FormInstance | undefined) => {

  };

  const resetForm = (fromRef: FormInstance | undefined) => {

  };

  const rememberm = ref<Boolean>(false);

</script>

<style lang="scss">
  .vou-login-heder {
    position: relative;
    width: 40%;
    min-height: 200px;
    max-height: 260px;
    padding: 24px;
    font-size: 16px;
    background-color: #fff;
  }

  .vou-heder-tab--line:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 20px;
    background-color: var(--vou-line-color);
  }

  .active {
    color: var(--vou-click-font-color)
  }
</style>
