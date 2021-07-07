import { BaseRule } from '@/components/validations/rules/BaseRule'

export class TypeRule extends BaseRule {
  private type: string

  constructor (message: string, type = 'email', trigger = 'blur') {
    super(message, trigger)
    this.type = type
  }
}
