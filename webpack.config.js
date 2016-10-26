const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
    join = path.join,
    resolve = path.resolve;
const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const dest = join(root, 'dist');
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV == 'development';
const getConfig = require('hjs-webpack');
const clearBeforeBuild = isDev ? false : true;

var config = getConfig({
    in: join(__dirname, 'index.js'),
    out: dest,
    devtool: 'source-map',
    clearBeforeBuild: clearBeforeBuild,
    isDev: isDev,
    html: false,
    devServer: {
        port: 3016,
        contentBase: __dirname,
    },
});
config.plugins = [
    new webpack.DefinePlugin({
        __NODE_ENV__: JSON.stringify(NODE_ENV),
        ROOT: JSON.stringify('https://randomuser.me/api/'),
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        },
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true
        },
        comments: false,
        sourceMap: false,
    }),
].concat(config.plugins);

config.resolve.root = [src, modules];
module.exports = config;