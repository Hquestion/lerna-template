const path = require('path');
const config = require('../build/config');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'zh-CN',
            fallbackLocale: 'zh-CN',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    configureWebpack: {
        resolve: {
            alias: config.alias
        }
    },
    devServer: {
        writeToDisk: true
    }
};
