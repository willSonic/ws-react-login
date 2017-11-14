'use strict';
var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);
var ROOT = path.resolve(__dirname, 'src');
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [require.resolve('./polyfills'), require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs],
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: function (info) { return path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'); }
    },
    resolve: {
        modules: [ROOT, 'node_modules',
            paths.appNodeModules].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'react-native': 'react-native-web'
        },
        plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])]
    },
    module: {
        strictExportPresence: true,
        rules: [
            /****************
             * TEST
             *****************/
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1
                                }
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    ident: 'postcss',
                                    plugins: function () { return [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9' // React doesn't support IE8 anyway
                                            ],
                                            flexbox: 'no-2009'
                                        })
                                    ]; }
                                }
                            }
                        ]
                    },
                    {
                        exclude: [/\.ts$/, /\.tsx$/, /\.js$/, /\.html$/, /\.json$/, /\.(sass|scss)$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: paths.appSrc,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    performance: {
        hints: false
    }
};
//# sourceMappingURL=webpack.config.dev.js.map