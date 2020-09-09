const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : ['./src/index.js','webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
    mode: 'development',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'js/app.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /(node-modules)/,
                use : {
                    loader : 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
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
                test : /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use : {
                    loader : 'file-loader',
                    options : {
                        name: 'assets/[hash].[ext]'
                    }
                }
            }
        ]
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        // hot: true,
        // open: true,
        // port: 9000,
        // publicPath:'/',
        historyApiFallback : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/app.css'
        })
    ]
}