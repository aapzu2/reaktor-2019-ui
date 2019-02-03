const DISABLED = 0
const WARN = 1
const ERROR = 2

module.exports = exports = {
    extends: [
        'eslint:recommended',
        'airbnb',
        'plugin:flowtype/recommended',
    ],
    parser: 'babel-eslint',
    settings: {
        onlyFilesWithFlowAnnotation: true,
    },
    env: {
        browser: true,
    },
    rules: {
        'arrow-parens': [ERROR, 'always', {
            requireForBlockBody: false,
        }],
        'curly': [ERROR, 'all'],
        'flowtype/define-flow-type': ERROR,
        'flowtype/newline-after-flow-annotation': [ERROR, 'always'],
        'indent': [ERROR, 4, {
            SwitchCase: WARN,
            MemberExpression: WARN,
            ObjectExpression: WARN,
        }],
        'max-len': [ERROR, {
            code: 150
        }],
        'no-debugger': WARN,
        'no-multiple-empty-lines': [ERROR, {
            max: 1,
            maxBOF: 0,
        }],
        'no-self-compare': DISABLED,
        'object-curly-newline': [ERROR, {
            ObjectExpression: {
                minProperties: 1,
            },
            ObjectPattern: {
                minProperties: 5,
            },
        }],
        'quote-props': [ERROR, 'as-needed', {
            numbers: true,
        }],
        'react/default-props-match-prop-types': DISABLED,
        'react/jsx-curly-spacing': [ERROR, {
            when: 'never',
            children: true,
        }],
        'react/jsx-indent': [ERROR, 4],
        'react/jsx-indent-props': [ERROR, 4],
        'react/require-default-props': DISABLED,
        'semi': [ERROR, 'never'],
    }
}
