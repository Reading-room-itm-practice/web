<template>
  <el-row :gutter='24' align='top' justify='center' id='register'>
    <el-col :offset='14' :span='12'>
      <el-form :model='registerForm' :rules='validationRules' ref='registerForm'>
        <el-form-item prop='email'>
          <email-form v-on:form-input='updateForm($event)' type='password'></email-form>
        </el-form-item>
        <el-form-item prop='password'>
          <password-form v-on:form-input='updateForm($event)' type='password'></password-form>
        </el-form-item>
        <el-form-item prop='passwordConfirmation'>
          <password-confirmation-form v-on:form-input='updateForm($event)'></password-confirmation-form>
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
import PasswordConfirmationForm from '@/components/forms/PasswordConfirmationForm.vue'
import { email, password, passwordConfirmation } from '@/components/validations/validationRules.ts'
import { baseRule } from '@/components/validations/baseRule'

@Component({
  components: {
    EmailForm,
    PasswordForm,
    PasswordConfirmationForm
  }
})
export default class RegisterCard extends Vue {
  public validationRules: baseRule = {
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation
  }

  private registerForm: Array<string> = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  public updateForm (event: Array<string>): void {
    this.registerForm[event.type] = event.body
  }

  public sendForm (): void {
    this.$refs.registerForm.validate((valid) => {
      if (valid) {
        console.log(this.registerForm)
      }
    })
  }
}
</script>
