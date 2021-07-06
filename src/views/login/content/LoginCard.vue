<template>
  <el-row :gutter='24' align='top' justify='center' id='login'>
    <el-col :offset='14' :span='12'>
      <el-form :model='loginForm' :rules='validationRules' ref='loginForm'>
        <el-form-item prop='username' label='Username'>
          <username-input v-on:form-input='updateForm($event)' type='password'></username-input>
        </el-form-item>
        <el-form-item prop='password' label='Password'>
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
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
import { UsernameInput, PasswordInput } from '@/components/forms'
import { username, password } from '@/components/validations/validationRules.ts'
import { baseValidationRule } from '@/components/validations/baseValidationRule'
import axios from 'axios'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    UsernameInput,
    PasswordInput
  }
})
export default class LoginCard extends Vue {
  private validationRules: baseValidationRule = {
    username: username,
    password: password
  }

  private loginForm: Array<string> = {
    username: '',
    password: ''
  }

  private updateForm (event: Array<string>): void {
    this.loginForm[event.type] = event.body
  }

  private sendForm (): void {
    this.$refs.loginForm.validate((valid) => {
      if (valid) {
        axios.post('/AuthenticateUser/login', this.loginForm).then(
          (response) => {
            console.log(`received token ${response.data.message}`)
            this.setToken(response.data.message)
            this.$router.push('/')
          }
        )
      }
    })
  }

  @Action [UserStoreMethods.setToken]
  @Getter [UserStoreMethods.isLoggedIn]
}
</script>
