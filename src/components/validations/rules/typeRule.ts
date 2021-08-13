import VueI18n from 'vue-i18n';
import { BaseRule } from '@/components/validations/rules/BaseRule';

export class TypeRule extends BaseRule {
	private type: string;

	constructor(message: VueI18n.TranslateResult, type = 'email', trigger = 'blur') {
		super(message, trigger);
		this.type = type;
	}
}
