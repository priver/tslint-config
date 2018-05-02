'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/typescript'),
        require.resolve('./rules/functionality'),
        require.resolve('./rules/maintainability'),
        require.resolve('./rules/style'),
    ],
};
