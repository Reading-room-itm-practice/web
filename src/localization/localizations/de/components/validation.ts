export const validation = {
  username: {
    required: 'Username wird benötigt',
    length: 'Username müssen zwischen 3 bis 20 Zeichen lang sein'
  },
  email: {
    required: 'Email wird benötigt',
    type: 'Ungültige E-Mail-Adresse'
  },
  password: {
    required: 'Passwort wird benötigt'
  },
  passwordConfirmation: {
    required: 'Passwort Bestätigung wird benötigt'
  }
}
