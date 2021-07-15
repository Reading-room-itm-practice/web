<template>
  <el-row :gutter='24' align='top' justify='center' id='register'>
    <el-col :offset='14' :span='12'>
      <el-form :model='registerForm' :rules='validationRules' ref='registerForm'>
        <el-form-item prop='username' :label="$t('register.username')">
          <username-input v-on:form-input='updateForm($event)' type='username'></username-input>
        </el-form-item>
        <el-form-item prop='email' :label="$t('register.email')">
          <email-input v-on:form-input='updateForm($event)' type='password'></email-input>
        </el-form-item>
        <el-form-item prop='password' :label="$t('register.password')">
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
        </el-form-item>
        <el-form-item prop='confirmPassword' :label="$t('register.passwordConfirmation')">
          <password-confirmation-input v-on:form-input='updateForm($event)'></password-confirmation-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='sendForm'>{{ $t('button.register') }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { EmailInput, UsernameInput, PasswordInput, PasswordConfirmationInput } from '@/components/forms'
import { registerRules } from '@/components/validations/types/register'
import axios from 'axios'
import { BaseInputInterface } from '@/interfaces/BaseInputInterface'
import { SuccessNotification } from '@/notifications/success'

@Component({
  components: {
    UsernameInput,
    EmailInput,
    PasswordInput,
    PasswordConfirmationInput
  }
})
export default class RegisterCard extends Vue {
  private validationRules = registerRules

  private registerForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  private updateForm (event: BaseInputInterface): void {
    this.registerForm[event.type] = event.body
  }

  private async sendForm (): void {
    await this.$refs.registerForm.validate((valid) => {
      if (valid) {
        axios.post('/AuthenticateUser/register', this.registerForm).then((response) => {
          if (response.status === 201) {
            Vue.notify(new SuccessNotification(response.data.message))
          }
        })
      }
    })
  }
}
</script>
