module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn'
  }
};