import { i18n } from '@/localization/i18n'
import { BaseNotification } from '@/notifications/base'

export class ErrorNotification extends BaseNotification {
  public group: string = i18n.t('errors.group').toString()
  public title: string = i18n.t('errors.title').toString()
}
