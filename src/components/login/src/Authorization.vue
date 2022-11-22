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
      <el-checkbox
        v-model="rememberm"
        true-label="1"
        false-label="0">记住密码</el-checkbox>
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
  import { ref, reactive, computed, onMounted } from 'vue';
  import type { FormInstance } from 'element-plus';
  import { store } from '@/store'
  import { useMultipleCookieStore } from '@/store/modules/storeCookie'
  import { setCookie, getCookie, clearCookie } from '@/utils/cookie'

  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  });

  const isActive = ref<String>('pass');

  const onTab = (tabType: string) => {
    isActive.value = tabType;
  };
  const accountRef = ref<FormInstance>();

  const accountForm = reactive({
    userName: '',
    password: '',
  });

  const rememberm = ref<String>('0');

  onMounted(() => {
    getCookie()
  })

  const validateUserName = (rule: any, value: string, cb: Function) => {
    if (!value) {
      return cb(new Error('This field is required'))
    }
    const reg = /^[a-zA-Z]([0-9a-zA-Z]{3,11})$/
    console.log(value)
    if (!reg.test(value)) {
      return cb(new Error('Please enter 3 to 11 characters'))
    }
    cb()
  };

  const validatepassword = (rule: any, value: string, cb: Function) => {
    if (!value) {
      return cb(new Error('This field is required'))
    }
    const reg = /^[a-zA-Z]\w{6,12}/g
    if (!reg.test(value)) {
      return cb(new Error('Please enter 6 to 12 characters'))
    }
    cb()
  };

  const rules = reactive({
    userName: [{ validator: validateUserName, trigger: 'blur' }],
    password: [{ validator: validatepassword, trigger: 'blur' }],
  });

  const getCookie = () => {
    // 先判断之前用户是否勾选记住密码
    const { cookieInfo } = useMultipleCookieStore(store)
    console.log(cookieInfo, 'cookieInfo')
    if (cookieInfo) {
      rememberm.value = cookieInfo.rememberm
      accountForm.userName = cookieInfo.userName
      accountForm.password = cookieInfo.password
    }
  }

  const useRemember = () => {
    if (Number(rememberm.value)) {
      const userInfo = {
        userName: accountForm.userName,
        password:  accountForm.password,
        rememberm: rememberm.value,
      }
      return setCookie(userInfo, 7)
    }
    clearCookie('userName', 'password', 'rememberm')
  }

  const submitForm = (fromRef: FormInstance | undefined) => {
    useRemember()
  };

  const resetForm = (fromRef: FormInstance | undefined) => {

  };



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
