import { RequiredRule } from '@/components/validations/rules/requiredRule';
import { LengthRule } from '@/components/validations/rules/lenghtRule';
import { TypeRule } from '@/components/validations/rules/typeRule';
import { i18n } from '@/localization/i18n';

export const rules = {
	username: [
		new RequiredRule(i18n.t('validation.username.required')),
		new LengthRule(i18n.t('validation.username.length'), 3, 20)
	],
	email: [new RequiredRule(i18n.t('validation.email.required')), new TypeRule(i18n.t('validation.email.type'))],
	password: [new RequiredRule(i18n.t('validation.password.required'))],
	passwordConfirmation: [new RequiredRule(i18n.t('validation.passwordConfirmation.required'))]
};
