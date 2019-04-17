const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const components = require('../components');

const config = require('../../../build/config');

const plugins = [
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin()
];

if (config.analysis.enable) {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerPort: config.analysis.port || 8899
        })
    );
}

module.exports = {
    mode: 'production',
    entry: components,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../lib'),
        publicPath: './',
        library: "@sdx/widget",
        libraryTarget: "umd",
        // chunkFilename: "[id].js",
        libraryExport: "default"
    },
    externals: config.externals,
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ['vue-style-loader', {loader: 'css-loader'}],
                        scss: ['vue-style-loader', {loader: 'sass-loader'}],
                    }
                }
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader',"css-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins
};

