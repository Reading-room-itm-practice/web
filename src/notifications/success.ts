import VueI18n from 'vue-i18n'
import { i18n } from '@/localization/i18n'

export class SuccessNotification {
  private group: VueI18n.TranslateResult = i18n.t('success.group')
  private title: VueI18n.TranslateResult = i18n.t('success.title')
  private text: VueI18n.TranslateResult = ''

  constructor (message: VueI18n.TranslateResult) {
    this.text = message
  }
}
