<template>
  <el-row :gutter='14' :offset='5' align='top' justify='center'>
    <el-col>
      <email-form v-on:form-input='updateForm($event)'></email-form>
      <password-form v-on:form-input='updateForm($event)'></password-form>
      <password-confirmation-form v-on:form-input='updateForm($event)'></password-confirmation-form>
      <el-button @click='sendForm'>Send</el-button>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import EmailForm from '@/components/forms/EmailForm.vue'
import PasswordForm from '@/components/forms/PasswordForm.vue'
import PasswordConfirmationForm from '@/components/forms/PasswordConfirmationForm.vue'

@Component({
  components: {
    EmailForm,
    PasswordForm,
    PasswordConfirmationForm
  }
})
export default class RegisterCard extends Vue {
  private registerForm: Array<string> = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  public updateForm (event: Array<string>): void {
    this.registerForm[event.type] = event.body
  }

  public sendForm (): void {
    console.log(this.registerForm)
  }
}
</script>
