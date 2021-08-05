import { NotificationOptions } from 'vue-notification'
import VueI18n from 'vue-i18n'

export class BaseNotification implements NotificationOptions {
  text: string | undefined

  constructor (message: VueI18n.TranslateResult) {
    this.text = message.toString()
  }
}
