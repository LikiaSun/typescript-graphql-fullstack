const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");

module.exports = merge.smart(common, {
  mode: "development",
  devtool: "inline-source-map",
  externals: [nodeExternals()],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  watch: true,
});
