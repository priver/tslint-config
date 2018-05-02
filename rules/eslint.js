'use strict';

module.exports = {
    'extends': [
        require.resolve('tslint-eslint-rules'),
    ],
    'rules': {
        // Possible Errors
        'no-constant-condition': true,
        'no-control-regex': true,
        'no-duplicate-case': true,
        'no-empty-character-class': true,
        'no-ex-assign': true,
        'no-extra-boolean-cast': true,
        'no-extra-semi': true,
        'no-inner-declarations': [true, 'functions'],
        'no-invalid-regexp': true,
        'ter-no-irregular-whitespace': false,
        'no-regex-spaces': true,
        'ter-no-sparse-arrays': false,
        'no-unexpected-multiline': true,
        'valid-jsdoc': false,
        'valid-typeof': true,

        // Best Practices
        'no-multi-spaces': [true, {
            exceptions: {
                VariableDeclaration: false,
                PropertyAssignment: true,
                BinaryExpression: false,
            },
        }],
        // 'ter-no-proto': true,
        // 'ter-no-script-url': true,
        // 'ter-no-self-compare': true,

        // Node.js and CommonJS
        'handle-callback-err': false,

        // Stylistic Issues
        'array-bracket-spacing': [true, 'never'],
        'block-spacing': [true, 'always'],
        'brace-style': [true, '1tbs', { allowSingleLine: true }],
        'ter-computed-property-spacing': [true, 'never'],
        'ter-func-call-spacing': [true, 'never'],
        'ter-indent': false,
        'ter-max-len': [true, 120, { ignoreUrls: true, ignoreRegExpLiterals: true }],
        'ter-newline-after-var': false,
        'ter-no-mixed-spaces-and-tabs': false,
        'object-curly-spacing': [true, 'always'],
        'sort-imports': false,
        'space-in-parens': [true, 'never'],
        'ter-no-tabs': true,

        // ES6
        'ter-arrow-body-style': [true, 'as-needed', { requireReturnForObjectLiteral: false }],
        'ter-arrow-parens': [true, 'always'],
        'ter-arrow-spacing': [true, { before: true, after: true }],
        'ter-prefer-arrow-callback': [true, {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
    },
};
