/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["react-hot-loader/patch"],
  devtool: "cheap-module-eval-soure-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "../dist"),
    host: "localhost",
    port: 9999,
    historyApiFallback: true,
  },
});
