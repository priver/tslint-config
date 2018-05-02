'use strict';

module.exports = {
    'extends': [
        require.resolve('tslint-react'),
    ],
    'rules': {
        'jsx-alignment': true,
        'jsx-boolean-value': [true, 'never'],
        'jsx-curly-spacing': [true, 'never'],
        'jsx-equals-spacing': [true, 'never'],
        'jsx-key': true,
        'jsx-no-bind': true,
        'jsx-no-lambda': true,
        'jsx-no-multiline-js': true,
        'jsx-no-string-ref': true,
        'jsx-self-close': true,
        'jsx-use-translation-function': false,
        'jsx-wrap-multiline': true,
    },
};

