'use strict';

module.exports = {
    rules: {
        'cyclomatic-complexity': false,
        'deprecation': false,
        'eofline': true,
        'indent': [true, 'spaces', 4],
        'linebreak-style': false,
        'max-classes-per-file': [true, 1],
        'max-file-line-count': false,
        'max-line-length': false, // ter-max-len
        'no-default-export': false,
        'no-duplicate-imports': true,
        'no-mergeable-namespace': false,
        'no-require-imports': true,
        'object-literal-sort-keys': false,
        'prefer-const': true,
        'prefer-readonly': false,
        'trailing-comma': [true, {
            singleline: 'never',
            multiline: {
                arrays: 'always',
                objects: 'always',
                functions: 'never',
                imports: 'always',
                exports: 'always',
                typeLiterals: 'always',
            },
        }],
    },
};
