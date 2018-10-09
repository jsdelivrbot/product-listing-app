const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

/* module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets:['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
}; */

module.exports = env => {
  return {
    entry: ["./src/index.js"],
    output: {
      path: __dirname,
      publicPath: "/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      htmlPlugin,
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.NODE_ENV, // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: false
      })
    ]
  }
}
