import { i18n } from '@/localization/i18n'
import VueI18n from 'vue-i18n'

class Error {
  private group:VueI18n.TranslateResult = i18n.t('errors.name')
  private title:VueI18n.TranslateResult = i18n.t('errors.title')
  private text:VueI18n.TranslateResult = ''

  constructor (message: VueI18n.TranslateResult) {
    this.text = message
  }
}

export const errors = {
  connection: new Error(i18n.t('errors.networkError')),
  notFound: new Error(i18n.t('errors.notFound')),
  credentials: new Error(i18n.t('errors.credentials'))
}
