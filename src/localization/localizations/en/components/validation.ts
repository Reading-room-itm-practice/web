export const validation = {
	username: {
		required: 'Username is required',
		length: 'Username Length should be between 3 to 20 characters'
	},
	email: {
		required: 'Email is required',
		type: 'Provide a proper email address'
	},
	password: {
		required: 'Password is required'
	},
	passwordConfirmation: {
		required: 'Password confirmation is required'
	}
};
