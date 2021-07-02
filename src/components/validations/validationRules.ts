import { baseRule } from '@/components/validations/baseRule'

export const email: baseRule = {
  required: true,
  message: 'Email is required',
  trigger: 'blur'
}

export const password: baseRule = {
  required: true,
  message: 'Password is required',
  trigger: 'blur'
}

export const passwordConfirmation: baseRule = {
  required: true,
  message: 'Password confirmation is required',
  trigger: 'blur'
}
