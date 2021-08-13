import { rules } from '@/components/validations';

export const newPasswordRules = {
	username: rules.username,
	password: rules.password,
	confirmPassword: rules.passwordConfirmation
};
