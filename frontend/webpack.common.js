const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[base]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    outputPath: 'assets/',
                    publicPath: 'assets/'
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/template.html',
            inject: 'body'
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/icons/*.png', to: 'assets/icons/[base]' },
            ],
        })
    ],
}
