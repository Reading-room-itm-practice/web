<template>
  <el-row :gutter='24' align='top' justify='center' id='login'>
    <el-col :offset='14' :span='12'>
      <el-form :model='loginForm' :rules='validationRules' ref='loginForm'>
        <el-form-item prop='username' :label="$t('login.username')">
          <username-input v-on:form-input='updateForm($event)' type='password'></username-input>
        </el-form-item>
        <el-form-item prop='password' :label="$t('login.password')">
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='sendForm'>{{ $t('login.button') }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { UsernameInput, PasswordInput } from '@/components/forms'
import { loginRules } from '@/components/validations/types/login'
import axios from 'axios'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Action, Getter } from 'vuex-class'
import { BaseInputInterface } from '@/interfaces/BaseInputInterface'
import { SuccessNotification } from '@/notifications/success'

@Component({
  components: {
    UsernameInput,
    PasswordInput
  }
})
export default class LoginCard extends Vue {
  private validationRules = loginRules

  private loginForm = {
    username: '',
    password: ''
  }

  private updateForm (event: BaseInputInterface): void {
    this.loginForm[event.type] = event.body
  }

  private sendForm (): void {
    this.$refs.loginForm.validate((valid) => {
      if (valid) {
        axios.post('/AuthenticateUser/login', this.loginForm).then((response) => {
          if (response.status === 200) {
            this.setToken(response.data.content)
            Vue.notify(new SuccessNotification(response.data.message))
            this.$router.push('/')
          }
        })
      }
    })
  }

  @Action [UserStoreMethods.setToken]
  @Getter [UserStoreMethods.isLoggedIn]
}
</script>
