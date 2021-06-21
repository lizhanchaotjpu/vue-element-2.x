<template>
  <div class="login-wrap-content bg-color-fff">
    <h2 class="mb16 center">登录</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      status-icon
      :label-width="labelWidth"
      hide-required-asterisk
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { loginRules } from '@/views/rules'
export default {
  data() {
    return {
      labelWidth: '60px',
      ruleForm: {
        name: '',
        password: ''
      },
      rules: loginRules
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.login(this.ruleForm)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-wrap-content {
  width: 300px;
  height: 200px;
  padding: 30px 16px;
  position: absolute;
  left: calc(50% - 150px - 16px);
  top: calc(50% - 100px - 30px);
}
</style>
