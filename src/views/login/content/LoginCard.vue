<template>
  <el-row :gutter='24' align='top' justify='center' id='register'>
    <el-col :offset='14' :span='12'>
      <el-form :model='loginForm' :rules='validationRules' ref='registerForm'>
        <el-form-item prop='username' label='Username'>
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
import EmailForm from '@/components/forms/EmailInput.vue'
import PasswordForm from '@/components/forms/PasswordInput.vue'
import { username, password } from '@/components/validations/validationRules.ts'
import { baseValidationRule } from '@/components/validations/baseValidationRule'
import axios from 'axios'
import { UserStoreMethods } from '@/store/modules/user'
import { Action } from 'vuex-class'

@Component({
  components: {
    EmailForm,
    PasswordForm
  }
})
export default class LoginCard extends Vue {
  public validationRules: baseValidationRule = {
    username: username,
    password: password
  }

  private loginForm: Array<string> = {
    username: '',
    password: ''
  }

  public updateForm (event: Array<string>): void {
    this.loginForm[event.type] = event.body
  }

  public sendForm (): void {
    this.$refs.registerForm.validate((valid) => {
      if (valid) {
        axios.post('/AuthenticateUser/login', this.loginForm).then(
          (response) => {
            console.log(`received token ${response.data.message}`)
            this.setToken(response.data.message)
          }
        )
      }
    })
  }

  @Action [UserStoreMethods.setToken]
}
</script>
