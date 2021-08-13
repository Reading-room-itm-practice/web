import VueI18n from 'vue-i18n';
import { i18n } from '@/localization/i18n';

export class ErrorNotification {
	private group: VueI18n.TranslateResult = i18n.t('errors.group');

	private title: VueI18n.TranslateResult = i18n.t('errors.title');

	private text: VueI18n.TranslateResult = '';

	constructor(message: VueI18n.TranslateResult) {
		this.text = message;
	}
}
