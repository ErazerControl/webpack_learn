const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
          {
            test: /\.(scss|sass|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: loader => [
                    require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                  ]
                }
              },
               {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }]
          }
        ]
      },
    plugins: [
    new MiniCssExtractPlugin({
        filename: '[name][hash].css' , // 设置最终输出的文件名
        chunkFilename: '[id][hash].css' 
    }),
    new HtmlWebpackPlugin({
        title: 'AICODER 全栈线下实习', // 默认值：Webpack App
        filename: 'main.html', // 默认值： 'index.html'
        template: path.resolve(__dirname, 'src/index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true // 移除属性的引号
        }
      })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})]
      }
}