<template>
  <el-row :gutter='24' align='top' justify='center'>
    <el-col :offset='14' :span='12'>
      <el-form :model='newPasswordForm' :rules='validationRules' ref='newPasswordForm'>
        <el-form-item prop='username' :label="$t('register.username')">
          <username-input v-on:form-input='updateForm($event)'></username-input>
        </el-form-item>
        <el-form-item prop='password' :label="$t('register.password')">
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
        </el-form-item>
<!--        <el-form-item prop='confirmPassword' :label="$t('register.passwordConfirmation')">
          <password-confirmation-input v-on:form-input='updateForm($event)'></password-confirmation-input>
        </el-form-item>-->
        <el-form-item>
          <el-button @click='sendForm'>{{ $t('button.newPassword') }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { EmailInput, PasswordConfirmationInput, PasswordInput, UsernameInput } from '@/components/forms'
import { newPasswordRules } from '@/components/validations/types/newPassword'
import { BaseInputInterface } from '@/interfaces/BaseInputInterface'
import axios from 'axios'
import { SuccessNotification } from '@/notifications/success'

@Component({
  components: {
    UsernameInput,
    EmailInput,
    PasswordInput,
    PasswordConfirmationInput
  }
})
export default class NewPasswordCard extends Vue {
  private validationRules = newPasswordRules
  private token = this.$route.query.token

  private newPasswordForm = {
    username: '',
    token: '',
    password: ''
    // confirmPassword: ''
  }

  private updateForm (event: BaseInputInterface): void {
    this.newPasswordForm[event.type] = event.body
  }

  private sendForm (): void {
    const form = {
      token: this.token,
      userName: this.newPasswordForm.username,
      newPassword: this.newPasswordForm.password
    }

    this.$refs.newPasswordForm.validate((valid) => {
      if (valid) {
        axios.post('AuthenticateUser/Reset-password-done', form).then((response) => {
          if (response.status === 200) {
            Vue.notify(new SuccessNotification(response.data.message))
          }
        })
      }
    })
  }
}
</script>
