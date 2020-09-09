const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
        app: path.resolve(__dirname,'src/index.js')
    },
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'js/[name].js',
        // publicPath: 'http://localhost:9000/',
        publicPath:'/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true,
        port: 9000,
        historyApiFallback : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [
                    'babel-loader'   
                ],
                exclude : /node-modules/
            },
            {
                test : /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test : /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use : {
                    loader : 'file-loader',
                    options : {
                        outputPath : 'assets/'
                    }
                }
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template : path.resolve(__dirname,'./public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}