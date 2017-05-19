module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // Disallow await inside of loops
    // http://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'warn',

    // Disallow comparisons to negative zero
    // http://eslint.org/docs/rules/no-compare-neg-zero
    // TODO: enable (semver-major)
    'no-compare-neg-zero': 'off',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['warn', 'always'],

    // disallow use of console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    'no-control-regex': 'warn',

    // disallow use of debugger
    'no-debugger': 'warn',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'warn',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'warn',

    // disallow a duplicate case label.
    'no-duplicate-case': 'warn',

    // disallow empty statements
    'no-empty': 'warn',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'warn',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'warn',

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'warn',

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'warn',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'warn',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'warn',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'warn',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'warn',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'warn',

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'warn',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'warn',

    // disallow sparse arrays
    'no-sparse-arrays': 'warn',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'warn',

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'warn',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'warn',

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'warn',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'warn',
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // disallow comparisons with the value NaN
    'use-isnan': 'warn',

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['warn', { requireStringLiterals: true }],
  }
};
