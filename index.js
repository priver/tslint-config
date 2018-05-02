'use strict';

module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        require.resolve('./base'),
        require.resolve('./rules/eslint'),
    ],
};
