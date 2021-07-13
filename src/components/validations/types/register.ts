import { rules } from '@/components/validations'

export const registerRules = {
  username: rules.username,
  email: rules.email,
  password: rules.password,
  confirmPassword: rules.passwordConfirmation
}
