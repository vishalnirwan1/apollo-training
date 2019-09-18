module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true,
        "browser": true,
    },
    "extends": ["eslint:recommended",
        'airbnb'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "no-multi-space": 0,
        "no-new": 0,
        'no-console': 'off',
        "import/no-named-as-default": 0,
    },
    "parser": "babel-eslint"
};