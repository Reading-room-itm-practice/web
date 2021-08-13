import VueI18n from 'vue-i18n';
import { BaseRule } from '@/components/validations/rules/BaseRule';

export class RequiredRule extends BaseRule {
	private required: boolean;

	constructor(message: VueI18n.TranslateResult, required = true, trigger = 'blur') {
		super(message, trigger);
		this.required = required;
	}
}
