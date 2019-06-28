
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const ROOT_DIR = path.resolve(__dirname,'./');
const SRC_DIR = path.resolve(__dirname,'./src');

module.exports = {
    entry:['@babel/polyfill',`${SRC_DIR}/index.js`],
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool:'cheap-module-eval-soruce-map',
    devServer : {
        historyApiFallback:true,
        hot:true,
        inline: true,
        overlay:{
            warnings:true,
            errors:true,
        },
        stats:{
            color:true
        },

    },
    plugins : [
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebPackPlugin({
            template:'./public/index.html',
            inject : 'body',
            showErrors: true,
        }),
    ],
};