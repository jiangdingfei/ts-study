const path = require("node:path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  // 导入文件后缀的支持
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/modules/handle-title.js'),
          to: path.resolve(__dirname, './dist')
        }
      ]
    })
  ],
  devServer: {
    port: 8089,
    compress: false,
  }
}
