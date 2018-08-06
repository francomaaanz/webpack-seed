var path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  watch: true,

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.scss$/,
        use: [    
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    stats: 'errors-only'
  }
 }