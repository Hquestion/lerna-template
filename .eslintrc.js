module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
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
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4]
    }
};
