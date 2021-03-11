const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// npm install -D vue-loader vue-template-compiler
const path=require('path')
module.exports = function() {
    const env = process.env.npm_lifecycle_event
    const dirpath = env === 'main' || env === 'dev'?'':env;
    return {
        entry:path.resolve(process.cwd(),dirpath,'src/index.js'),
        output:{
            path:path.resolve(process.cwd(),dirpath),
            filename:env+'.js'
        },
        mode: 'development',
        devtool:'inline-source-map',
        devServer: {
            contentBase: './'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/i,
                    use: 'vue-loader'
                },
                {
                    test: /\.js$/i,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/i,
                    use: [
                        {loader:'style-loader'},
                        {loader:'css-loader',options:{modules:true}},
                        {loader:'sass-loader'},
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: '杜官峰',
                template: path.resolve(__dirname,'template/index.html')
            }),
            new VueLoaderPlugin()
            // new CleanWebpackPlugin()
        ]
    }
}