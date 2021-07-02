import { baseValidationRule } from '@/components/validations/baseValidationRule'

export const email: baseValidationRule = {
  required: true,
  message: 'Email is required',
  trigger: 'blur'
}

export const password: baseValidationRule = {
  required: true,
  message: 'Password is required',
  trigger: 'blur'
}

export const passwordConfirmation: baseValidationRule = {
  required: true,
  message: 'Password confirmation is required',
  trigger: 'blur'
}
