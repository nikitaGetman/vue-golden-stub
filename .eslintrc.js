module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'no-eq-null': 'error',
    'require-await': 'error',

    'vue/max-len': ['error', { code: 120, template: 120, ignoreHTMLAttributeValues: false }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
    'vue/require-name-property': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-direct-export': 'error',
  },
};
