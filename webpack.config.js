const path = require('path')
const CSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./client.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: "static/bundle.js"
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
    },
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader"
      },
      {
        test: /\.css$/,
        //use: [CSSExtractPlugin.loader, 'style-loader', 'css-loader']
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CSSExtractPlugin({
      filename: "[name].css"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    host: '0.0.0.0',
    port: 9000
  }
};
