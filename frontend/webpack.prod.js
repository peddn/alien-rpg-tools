const webpack = require('webpack')
const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')
module.exports = merge(common, {

    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',
        }),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify(process.env.BASE_URL),
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        })
    ]
})
