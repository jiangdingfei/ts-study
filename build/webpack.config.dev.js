const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
  },
  // 导入文件后缀的支持
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/ // 排除的文件
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/modules/handle-title.js'),
          to: path.resolve(__dirname, '../dist')
        }
      ],

    })
  ]
}