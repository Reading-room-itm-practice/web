import VueI18n from 'vue-i18n'
import { localizations } from '@/localization/localizations'
import Vue from 'vue'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'de',
  messages: localizations,
  fallbackLocale: 'en'
})
