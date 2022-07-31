module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:jsonc/base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'prefer-arrow-functions'],
  rules: {
    indent: [0, 'tab'],
    'no-tabs': 0,
    'new-cap': 0,
    'no-shadow': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'no-else-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'newline-per-chained-call': 0,
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ]
  }
}
