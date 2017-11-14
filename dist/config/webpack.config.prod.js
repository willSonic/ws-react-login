'use strict';
var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var eslintFormatter = require('react-dev-utils/eslintFormatter');
var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
var paths = require('./paths');
var getClientEnvironment = require('./env');
var publicPath = paths.servedPath;
var shouldUseRelativeAssetPaths = publicPath === './';
var shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
var publicUrl = publicPath.slice(0, -1);
var env = getClientEnvironment(publicUrl);
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.');
}
var cssFilename = 'static/css/[name].[contenthash:8].css';
var extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};
module.exports = {
    bail: true,
    devtool: shouldUseSourceMap ? 'source-map' : false,
    entry: [require.resolve('./polyfills'), paths.appIndexJs],
    output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: function (info) { return path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/'); }
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'react-native': 'react-native-web'
        },
        plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])]
    },
    module: {
        strictExportPresence: true,
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
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
                        loader: ExtractTextPlugin.extract(Object.assign({
                            fallback: require.resolve('style-loader'),
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
                                        minimize: true,
                                        sourceMap: shouldUseSourceMap
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
                        }, extractTextPluginOptions))
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.ts$/, /\.tsx$/, /\.js$/, /\.html$/, /\.json$/, /\.(sass|scss)$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.DefinePlugin(env.stringified),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false
            },
            output: {
                comments: false,
                ascii_only: true
            },
            sourceMap: shouldUseSourceMap
        }),
        new ExtractTextPlugin({
            filename: cssFilename
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json'
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger: function (message) {
                if (message.indexOf('Total precache size is') === 0) {
                    return;
                }
                if (message.indexOf('Skipping static resource') === 0) {
                    return;
                }
                console.log(message);
            },
            minify: true,
            navigateFallback: publicUrl + '/index.html',
            navigateFallbackWhitelist: [/^(?!\/__).*/],
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
//# sourceMappingURL=webpack.config.prod.js.map