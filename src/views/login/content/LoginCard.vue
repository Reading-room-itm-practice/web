<template>
  <el-row :gutter='24' align='top' justify='center' id='login' :class="getTheme + '-login'">
    <el-col :offset='14' :span='12'>
      <el-form :model='loginForm' :rules='validationRules' ref='loginForm'>
        <el-form-item prop='username' :label="$t('login.username')">
          <username-input v-on:form-input='updateForm($event)' type='password'></username-input>
        </el-form-item>
        <el-form-item prop='password' :label="$t('login.password')">
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='sendForm'>{{ $t('button.login') }}</el-button>
        </el-form-item>
      </el-form>
      <h2>{{ $t('login.passwordResetMessage') }}</h2>
      <router-link to='reset-password' class='reset-password'>
        {{ $t('login.passwordResetAction') }}
      </router-link>
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
import jwtDecode from 'jwt-decode'

@Component({
  components: {
    UsernameInput,
    PasswordInput
  }
})
export default class LoginCard extends Vue {
  private validationRules = loginRules
  private userRoleKey = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

  private loginForm = {
    username: '',
    password: ''
  }

  private updateForm (event: BaseInputInterface): void {
    this.loginForm[event.type] = event.body
  }

  private async sendForm (): Promise<void> {
    await this.$refs.loginForm?.validate((valid: boolean) => {
      if (valid) {
        axios.post('/Authenticate/Login', this.loginForm).then((response) => {
          if (response.status === 200) {
            this.setUserRole(jwtDecode(response.data.content)[this.userRoleKey])
            this.setToken(response.data.content)
            Vue.notify(new SuccessNotification(response.data.message))
            this.$router.push('/')
          }
        })
      }
    })
  }

  @Action [UserStoreMethods.setToken]
  @Action [UserStoreMethods.setUserRole]
  @Getter [UserStoreMethods.isLoggedIn]: string
  @Getter [UserStoreMethods.getTheme]: string
}
</script>
