const { OFF, ERROR, WARN } = require('./constants')

module.exports = {
  defaultSeverity: 'error',
  extends: ['tslint:recommended'],
  rules: {
    semicolon: [true, 'never'],
    quotemark: [true, 'single', 'jsx-double', 'avoid-escape', 'avoid-template'],
    'trailing-comma': [true, {multiline: 'never', singleline: 'never'}],
    'space-before-function-paren': [true, 'always'],
    'no-console': {
      severity: WARN
    },
    'object-literal-sort-keys': false,
    'ordered-imports': false,
    'interface-name': false,
    'member-ordering': {
      options: {
        order: 'fields-first',
      }
    },
    'no-conditional-assignment': {
      severity: WARN
    }
  }
}
