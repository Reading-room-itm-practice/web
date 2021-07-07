import { BaseRule } from '@/components/validations/rules/BaseRule'

export class RequiredRule extends BaseRule {
  private required: boolean

  constructor (message: string, required = true, trigger = 'blur') {
    super(message, trigger)
    this.required = required
  }
}
