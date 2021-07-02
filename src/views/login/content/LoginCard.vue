<template>
  <el-row :gutter='24' align='top' justify='center' id='register'>
    <el-col :offset='14' :span='12'>
      <el-form :model='loginForm' :rules='validationRules' ref='registerForm'>
        <el-form-item prop='email' label='Email'>
          <email-form v-on:form-input='updateForm($event)' type='password'></email-form>
        </el-form-item>
        <el-form-item prop='password' label='Password'>
          <password-form v-on:form-input='updateForm($event)' type='password'></password-form>
        </el-form-item>
        <el-form-item>
          <el-button @click='sendForm'>Send</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import EmailForm from '@/components/forms/EmailForm.vue'
import PasswordForm from '@/components/forms/PasswordForm.vue'
import { email, password } from '@/components/validations/validationRules.ts'
import { baseRule } from '@/components/validations/baseRule'

@Component({
  components: {
    EmailForm,
    PasswordForm
  }
})
export default class LoginCard extends Vue {
  public validationRules: baseRule = {
    email: email,
    password: password
  }

  private loginForm: Array<string> = {
    email: '',
    password: ''
  }

  public updateForm (event: Array<string>): void {
    this.loginForm[event.type] = event.body
  }

  public sendForm (): void {
    this.$refs.registerForm.validate((valid) => {
      if (valid) {
        console.log(this.loginForm)
      }
    })
  }
}
</script>
