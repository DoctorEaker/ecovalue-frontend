module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'include',
          'function',
          'if',
          'error',
          'else',
          'warn',
          'return',
          'mixin',
        ],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};