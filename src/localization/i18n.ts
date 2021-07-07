import VueI18n from 'vue-i18n'
import { localizations } from '@/localization/localizations/en'
import Vue from 'vue'

Vue.use(VueI18n)
console.log()
export const i18n = new VueI18n({
  locale: 'en',
  messages: localizations.en,
  fallbackLocale: 'en'
})
