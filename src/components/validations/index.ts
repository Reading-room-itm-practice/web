import { RequiredRule } from '@/components/validations/rules/RequiredRule'
import { LengthRule } from '@/components/validations/rules/LenghtRule'
import { TypeRule } from '@/components/validations/rules/TypeRule'

export const rules = {
  username: [
    new RequiredRule('Username is required'),
    new LengthRule('Length should be 3 to 20', 3, 20)
  ],
  email: [
    new RequiredRule('Email is required'),
    new TypeRule('Provide a proper email address')
  ],
  password: [
    new RequiredRule('Password is required')
  ],
  passwordConfirmation: [
    new RequiredRule('Password confirmation is required')
  ]
}