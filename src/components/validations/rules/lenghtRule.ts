import { BaseRule } from '@/components/validations/rules/BaseRule'
import VueI18n from 'vue-i18n'

export class LengthRule extends BaseRule {
  private min: number
  private max: number

  constructor (message: VueI18n.TranslateResult, min: number, max: number, trigger = 'blur') {
    super(message, trigger)
    this.min = min
    this.max = max
  }
}
