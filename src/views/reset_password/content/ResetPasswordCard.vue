<template>
  <el-row :gutter='24' align='top' justify='center' :class="getTheme + '-login'">
    <el-col :offset='14' :span='12'>
      <el-form :model='resetPasswordForm' :rules='validationRules' ref='resetPasswordForm'>
        <el-form-item prop='email' :label="$t('register.email')">
          <email-input v-on:form-input='updateForm($event)'></email-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='sendForm'>{{ $t('button.resetPassword') }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { EmailInput } from '@/components/forms'
import { BaseInputInterface } from '@/interfaces/BaseInputInterface'
import axios from 'axios'
import { SuccessNotification } from '@/notifications/success'
import { resetPasswordRules } from '@/components/validations/types/reset'
import { Getter } from 'vuex-class'
import { UserStoreMethods } from '@/enums/UserStoreMethods'

@Component({
  components: {
    EmailInput
  }
})
export default class ResetPasswordCard extends Vue {
  private resetPasswordForm = {
    email: ''
  }

  private updateForm (event: BaseInputInterface): void {
    this.resetPasswordForm[event.type] = event.body
  }

  private validationRules = resetPasswordRules

  private async sendForm (): Promise<void> {
    await this.$refs.resetPasswordForm.validate((valid) => {
      if (valid) {
        axios.post('Authenticate/Forgot-password', null, {
          params: {
            email: this.resetPasswordForm.email
          }
        }).then((response) => {
          if (response.status === 200) {
            Vue.notify(new SuccessNotification(response.data.message))
          }
        })
      }
    })
  }

  @Getter [UserStoreMethods.getTheme]: string
}
</script>
