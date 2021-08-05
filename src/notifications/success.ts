import { i18n } from '@/localization/i18n'
import { BaseNotification } from '@/notifications/base'

export class SuccessNotification extends BaseNotification {
  public group: string = i18n.t('success.group').toString()
  public title: string = i18n.t('success.title').toString()
}
