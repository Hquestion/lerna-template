module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'eslint:recommended'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "parser": 'babel-eslint'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "indent": ["error", 4]
    }
};
