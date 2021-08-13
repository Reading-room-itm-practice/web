import VueI18n from 'vue-i18n';
import { NotificationOptions } from 'vue-notification';
import { i18n } from '@/localization/i18n';

export default class SuccessNotification implements NotificationOptions {
	group = i18n.t('success.group').toString();

	title = i18n.t('success.title').toString();

	text = '';

	constructor(message: VueI18n.TranslateResult) {
		this.text = message.toString();
	}
}
