import VueI18n from 'vue-i18n';

export class BaseRule {
	private message: VueI18n.TranslateResult;

	private trigger: string;

	constructor(message: VueI18n.TranslateResult, trigger: string) {
		this.message = message;
		this.trigger = trigger;
	}
}
