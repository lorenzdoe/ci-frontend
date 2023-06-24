module.exports = {
    root: true,
    env: {
      node: true,
      jest: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    'plugins': [
        'vue'
    ],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
    },
};