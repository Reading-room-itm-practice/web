module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['plugin:vue/essential', '@vue/typescript', 'plugin:prettier/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'indent': ['off'],
    'no-tabs': 'off',
    'comma-dangle': ['error', 'never'],
    'spaced-comment': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    'no-return-await': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'no-unused-vars': 'off',
    'no-bitwise': 'off',
    'no-undef': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  overrides: [
    {
      files: '*.json',
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
