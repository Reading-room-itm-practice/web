<template>
  <el-row :gutter='24' align='top' justify='center' id='register'>
    <el-col :offset='14' :span='12'>
      <el-form :model='registerForm' :rules='validationRules' ref='registerForm'>
        <el-form-item prop='username' label='Username'>
          <username-input v-on:form-input='updateForm($event)' type='username'></username-input>
        </el-form-item>
        <el-form-item prop='email' label='Email'>
          <email-input v-on:form-input='updateForm($event)' type='password'></email-input>
        </el-form-item>
        <el-form-item prop='password' label='Password'>
          <password-input v-on:form-input='updateForm($event)' type='password'></password-input>
        </el-form-item>
        <el-form-item prop='passwordConfirmation' label='Password confirmation'>
          <password-confirmation-input v-on:form-input='updateForm($event)'></password-confirmation-input>
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
import UsernameInput from '@/components/forms/UsernameInput.vue'
import EmailInput from '@/components/forms/EmailInput.vue'
import PasswordInput from '@/components/forms/PasswordInput.vue'
import PasswordConfirmationInput from '@/components/forms/PasswordConfirmationInput.vue'
import { email, password, passwordConfirmation, username } from '@/components/validations/validationRules.ts'
import { baseValidationRule } from '@/components/validations/baseValidationRule'
import axios from 'axios'

@Component({
  components: {
    UsernameInput,
    EmailInput,
    PasswordInput,
    PasswordConfirmationInput
  }
})
export default class RegisterCard extends Vue {
  public validationRules: baseValidationRule = {
    username: username,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation
  }

  private registerForm: Array<string> = {
    username: '',
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
        axios.post('/AuthenticateUser/register', this.registerForm).then(
          () => this.$router.push('/login')
        )
      }
    })
  }
}
</script>
