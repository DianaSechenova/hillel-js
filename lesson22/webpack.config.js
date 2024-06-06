const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },
};
